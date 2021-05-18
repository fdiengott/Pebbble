class Api::UserFollowersController < ApplicationController

  def index 
    @users = User.where(creator_id: params[:creator_id]).with_attached_profile_picture
    render '/users/api/index'
  end
  
end