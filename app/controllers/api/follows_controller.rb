class Api::FollowsController < ApplicationController

  def index 
    @follows = Follow.all
    render 'api/follows/index'
  end

  def create
    @follow = Follow.new(follows_params)

    if @follow.save
      render 'api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 400
    end
  end

  def destroy
    @follow = Follow.find_by(id: params[:id])

    if @follow && @follow.destroy 
      render 'api/follows/show'
    else
      render json: ["Bad request"], status: 400
    end
  end

  private 
  def follows_params 
    params.require(:follow).permit(:follower_id, :creator_id)
  end
end