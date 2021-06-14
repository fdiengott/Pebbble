class Api::UserLikesController < ApplicationController 

  def index
    @likes = Like.where(liker_id: params[:liker_id])
    if @likes
      render 'api/likes/index'
    else
      render json: ["User not found"], status: 404
    end
  end

end