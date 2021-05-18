class Api::FollowedCardsController < ApplicationController

  def index
    followed_users_arr = User.joins(:received_follows).where(follows: { follower_id: 4 }).pluck("follows.creator_id")
    @cards = Card.with_attached_img.includes(:creator, :profile_picture).where(creator_id: followed_users_arr)
    render 'api/cards/index'
  end

end