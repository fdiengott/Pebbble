# this will render cards and the collection

json.collections do 
  json.set! @collection.id do
    json.extract! @collection, :id, :title, :curator_id, :num_cards, :num_creators
  end
end

@cards.each do |card|
  json.cards do 
    json.set! card.id do 
      json.partial! 'api/cards/card', card: card
      json.collection_id @collection.id
    end
  end

  json.users do 
    user = card.creator
    
    json.set! user.id do
      json.extract! user, :id, :name
      json.partial! '/api/users/profile_picture', user: user
    end
  end
end
json.cardCount @count