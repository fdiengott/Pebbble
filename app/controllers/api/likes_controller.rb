class Api::LikesController < ApplicationController 
  
  def create
    @like = Like.new(likes_params)

    if @like.save
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 400
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])

    if @like && @like.destroy 
      render 'api/likes/show'
    else
      render json: ["Bad request"], status: 400
    end
  end

  private 
  def likes_params 
    params.require(:like).permit(:user_id, :card_id)
  end
end