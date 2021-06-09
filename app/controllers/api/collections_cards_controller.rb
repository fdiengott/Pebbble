
# This controller is for the collections cards joins table
class Api::CollectionsCardsController < ApplicationController

  def create
    debugger
    collection_ids = params[:collections_card][:collection_ids]

    if collection_ids
      card = Card.find_by(id: params[:collections_card][:card_id])
      debugger
      if card
        debugger
        card.collection_ids = collection_ids
        @collections_card = CollectionsCard.where(card_id: card.id, collection_id: collection_ids)
        render '/api/collections_cards/index'
      else 
        render json: ['Card not found'], status: 404
      end
    end

    # else 

    #   @collections_card = CollectionsCard.new(collections_cards_params)
    #   if @collections_card.save
    #     # render '/api/collections_cards/show'
    #   else
    #     render json: @collections_card.errors.full_messages, status: 422
    #   end

    # end
  end

  def destroy
    @collections_card = CollectionsCard.find_by(id: params[:id])
    if @collections_card
      @collections_card.destroy
      # render '/api/collections_cards/show'
    else
      render json: ["Invalid permissions"], status: 401
    end
  end

  private
  def collections_cards_params
    params.require(:collections_card).permit(:card_id, :collection_id, :collection_ids)
  end

end
