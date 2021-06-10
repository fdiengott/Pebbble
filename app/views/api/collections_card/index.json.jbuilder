json.collections_card do 
  @collections_card.each do |collection_card| 
    json.set! collection_card.id do 
      json.extract! collection_card, :id, :card_id, :collection_id
      json.curator_id collection_card.collection.curator_id
    end
  end
  
end