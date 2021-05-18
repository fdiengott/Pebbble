class Api::FollowedUsersController < ApplicationController
  def index
    user = User.find_by(id: params[:follower_id])

    if user
      @users = user.followed_users
      render '/api/users/index'
    else 
      render json: ["No user found"], status: 404
    end
  end


end