# this will render cards and the collection

json.collections do 
  json.set! @collection.id do
    json.extract! @collection, :id, :title, :curator_id
  end
end

@cards.each do |card|
  json.cards do 
    json.set! card.id do 
      json.partial! 'api/cards/card', card: card
    end
  end
end