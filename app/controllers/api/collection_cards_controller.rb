
# THIS CONTROLLER IS TO GET ALL THE CARDS FOR ONE COLLECTION
class Api::CollectionCardsController < ApplicationController

  def index
    # this needs eager loading
    @collection = Collection.find_by(id: params[:collection_id])
    @cards = @collection.cards.includes(:creator)
    @count = @cards.count
    render '/api/collection_cards/index' # this will render cards and the collection
  end

end
