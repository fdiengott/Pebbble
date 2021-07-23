
json.cards do 
  @cards.each do |card|
    json.set! card.id do 
      json.partial! 'api/cards/card', card: card
    end
  end
end
json.cardCount @count