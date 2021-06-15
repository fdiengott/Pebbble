class Api::LikedCardsController < ApplicationController

  def index
    @cards = User.find_by(id: params[:liker_id]).liked_cards
    render 'api/cards/index' 
  end

end