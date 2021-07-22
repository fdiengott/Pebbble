class Api::FollowedCardsController < ApplicationController

  def index
    offset, category = params[:offset], params[:category]

    followed_users_arr = Follow.where(follower_id: params[:follower_id]).pluck(:creator_id)
    @cards = Card.with_attached_img.includes(:creator, :profile_picture).where(creator_id: followed_users_arr)

    if offset
      @cards = @cards.offset(params[:offset])
    end

    if category != nil && category.downcase != "all"
      @cards = @cards.where(category: category.downcase)
    end

    render 'api/cards_and_users/index'
  end

end