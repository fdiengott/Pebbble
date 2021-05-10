class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      render '/api/users/show'
    else 
      render json: @user.errors.full_messages, status: 422
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

end
