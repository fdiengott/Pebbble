
# THIS CONTROLLER IS TO GET ALL THE CARDS FOR ONE COLLECTION
class Api::CollectionCardsController < ApplicationController

  def index
    # this needs eager loading
    @cards = Collection.find_by(id: params[:collection_id]).cards
    render '/api/cards/index'
  end

end
