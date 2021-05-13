class Api::UserCardsController < ApplicationController 
  def index
    @cards = Card.where(creator_id: params[:creator_id])
    render 'api/cards/index'
  end
end