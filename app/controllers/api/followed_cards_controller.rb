class Api::FollowedCardsController < ApplicationController

  def index
    followed_users_arr = Follow.where(follower_id: params[:follower_id]).pluck(:creator_id)
    @cards = Card.with_attached_img.includes(:creator, :profile_picture).where(creator_id: followed_users_arr)
    render 'api/cards/index'
  end

end