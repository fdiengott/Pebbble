
@cards.each do |card|
  json.cards do 
    json.set! card.id do 
      json.partial! 'api/cards/card', card: card
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