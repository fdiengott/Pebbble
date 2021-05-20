class Api::CollectionsController < ApplicationController
  
  def show 
    @collection = Collection.find_by(id: params[:id])
    render '/api/collections/show'
  end
  
  def create 
    @collection = Collection.new(collection_params)

    if @collection.save
      render '/api/collections/show'
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end
  
  def update
    @collection = Collection.find_by(id: params[:id])

    if @collection && @collection.update(collection_params)
      render 'api/collections/show'
    else
      render json: @collection.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @collection = Collection.find_by(id: params[:id])
    if @collection && @collection.curator_id == current_user.id
      @collection.destroy
      render 'api/collections/show'
    else
      render json: ["Invalid permissions"], status: 401
    end
  end

  private 
  def collection_params
    params.require(:collection).permit(:title, :curator_id)
  end

end
