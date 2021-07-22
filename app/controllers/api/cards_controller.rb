class Api::CardsController < ApplicationController
  def index
    # @cards = Card.includes(:creator, profile_picture_attachment: :blob)
    # @cards = Card.includes(:creator).with_attached_img
    
    offset, category = params[:offset], params[:category]

    @cards = Card.with_attached_img.includes(:creator, :profile_picture).limit(12)
    
    if offset
      @cards = @cards.offset(params[:offset])
    end

    if category != nil && category.downcase != "all"
      @cards = @cards.where(category: category.downcase)
    end

    render '/api/cards_and_users/index'
  end

  def show
    @card = selected_card
    render 'api/cards/show'
  end
  
  def create
    @card = Card.new(card_params)
    if @card.save
      render 'api/cards/show'
    else
      render json: @card.errors.full_messages, status: 422
    end
  end
  
  def update
    @card = selected_card
    if @card && @card.update(card_params)
      render 'api/cards/show'
    else
      render json: @card.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @card = selected_card
    if @card && @card.creator_id == current_user.id
      @card.destroy
      render 'api/cards/show'
    else
      render json: ["Invalid permissions"], status: 401
    end
  end

  private 
  def card_params
    params.require(:card).permit(:creator_id, :title, :description, :animated, :category, :img, :id)
  end

  def selected_card
    Card.find_by(id: params[:id])
  end

end
