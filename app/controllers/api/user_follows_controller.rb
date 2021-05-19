class Api::UserFollowsController < ApplicationController 

  def index
    @follows = Follow.where(follower_id: params[:follower_id])
    render 'api/follows/index'
  end

end