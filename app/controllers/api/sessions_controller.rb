class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(username: params[:user][:username], password: params[:user][:password])

    if @user
      render "api/users/show"
    else 
      render json: ["Invalid username or password. Please try again."], status: 401
    end
  end
  
  def destroy
    @user = User.find_by(session_token: session[:session_token])
    if @user
      logout
      render "api/users/show"
    else 
      render json: ["No user is signed in"], status: 404
    end

  end
end
