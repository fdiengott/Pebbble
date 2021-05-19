class Api::UserCollectionsController < ApplicationController

  def index
    @collections = User.find_by(id: params[:curator_id]).collections.includes(:cards)
    render '/api/collections/index'
  end

end