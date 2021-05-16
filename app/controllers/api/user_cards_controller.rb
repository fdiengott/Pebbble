class Api::UserCardsController < ApplicationController 
  def index
    @cards = Card.where(creator_id: params[:creator_id])
    render 'api/user_cards/index'
  end
end