class Api::UsersController < ApplicationController
  
  def index
    @users = User.all
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
    if @user && @user.update(user_params)
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

  private
  def user_params
    params.require(:user).permit(:username, :name, :location, :email, :bio, :website_url, :password)
  end

  def selected_user
    User.find_by(id: params[:id])
  end

end
