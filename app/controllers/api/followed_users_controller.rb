class Api::FollowedUsersController < ApplicationController
  def index
    @users = User.find_by(id: params[:creator_id]).followed_users
    render '/api/users/index'
  end


end