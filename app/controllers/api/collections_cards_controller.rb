
# This controller is for the collections cards joins table
class Api::CollectionsCardsController < ApplicationController

  def create
    collection_ids = params[:collections_cards][:collection_ids]

    if collection_ids
      @card = params[:collections_cards][:card_id]
      if @card
        @card.collection_ids = collection_ids
      else 
        render json: ['Card not found'], status: 404
      end
    else 

      @collections_card = CollectionsCard.new(collections_cards_params)
      if @collections_card.save
        render '/api/collections_cards/show'
      else
        render json: @collections_card.errors.full_messages, status: 422
      end

    end
  end

  def destroy
    @collections_card = CollectionsCard.find_by(id: params[:id])
    if @collections_card
      @collections_card.destroy
      render '/api/collections_cards/show'
    else
      render json: ["Invalid permissions"], status: 401
    end
  end

  private
  def collections_cards_params
    params.require(:collections_cards).permit(:card_id, :collection_id, :collection_ids)
  end

end
