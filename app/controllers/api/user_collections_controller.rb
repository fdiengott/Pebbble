class Api::UserCollectionsController < ApplicationController

  def index
    @collections = User.find_by(id: params[:curator_id]).collections.includes(:cards)

    if @collections.count > 0
      render '/api/collections/index'
    else 
      render json: ["No collections found"], status: 404
    end

  end

end