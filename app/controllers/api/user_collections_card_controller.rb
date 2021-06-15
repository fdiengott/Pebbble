class Api::UserCollectionsCardController < ApplicationController


  def index
    user_id = params[:user_id]
    # card_id = params[:card_id]

    user_collections = Collection.where(curator_id: params[:user_id]).pluck(:id)
    if user_collections
      # @collection_cards = CollectionsCard.where(card_id: card_id, collection_id: user_collections))
      @collections_card = CollectionsCard.where(collection_id: user_collections)
      render '/api/collections_card/index'
    else 
      render json: ["This user has no collections"], status: 404
    end
  end

end