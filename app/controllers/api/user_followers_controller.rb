class Api::UserFollowersController < ApplicationController

  def index 
    @users = User.find_by(id: params[:creator_id]).followers.with_attached_profile_picture
    render '/api/users/index'
  end
  
end