class Api::UsersController < ApplicationController
  
  def index
    @users = User.includes(profile_picture_attachment: :blob)
    render '/api/users/index'
  end
  
  def show 
    @user = selected_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render '/api/users/show'
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end
  
  def update
    @user = selected_user

    # TO REMOVE A PROFILE PICTURE FROM A USER
    if params[:user][:profile_picture] == ""
      @user.profile_picture.purge
      modified_user_params = params.require(:user).permit(:username, :name, :location, :email, :bio, :website_url, :password)
    else 
      modified_user_params = user_params
    end
    

    if @user && @user.update(modified_user_params)
      render '/api/users/show'
    elsif !@user
      render json: ["Could not location user"], status: 400
    else 
      render json: @user.errors.full_messages, status: 400
    end
  end

  def destroy
    @user = User.find_by(session_token: session[:session_token])
    if @user && @user == current_user
      @user.destroy!
    else 
      render json: ["Invalid permission"], status: 422
    end
  end

  def search
    @users = User.where("name ilike ?", "%#{params[:search]}%")
    
    if !@users.empty?
      # return users, but how much info?
    else 
      # return empty array probably
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :name, :location, :email, :bio, :website_url, :password, :profile_picture)
  end

  def selected_user
    User.find_by(id: params[:id])
  end

end
