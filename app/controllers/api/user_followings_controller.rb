class Api::UserFollowingsController < ApplicationController
  def index
    @users = User.where(follower_id: params[:follower_id]).with_attached_profile_picture
    render '/users/api/index'
  end
end