
# This controller is for the collections cards joins table
class Api::CollectionsCardsController < ApplicationController

  def create
    @collections_card = CollectionsCard.new(collections_cards_params)
    if @collections_card.save
      render '/api/collections_cards/show'
    else
      render json: @collections_card.errors.full_messages, status: 422
    end
  end

  def destroy
    @collections_card = CollectionsCard.find_by(id: params[:id])
    if @collections_card && @collections_card.curator_id == current_user.id
      @collections_card.destroy
      render '/api/collections_cards/show'
    else
      render json: ["Invalid permissions"], status: 401
    end
  end

  private
  def collections_cards_params
    params.require(:collections_cards).permit(:card_id, :collection_id)
  end

end
