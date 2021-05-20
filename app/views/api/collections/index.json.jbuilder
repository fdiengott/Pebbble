
@collections.each do |collection| 

  json.collections do 
    json.set! collection.id do 
      json.extract! collection, :title, :curator_id, :id
    end
  end
      
  json.cards do 

    collection.cards.each_with_index do |card, i|
      break if i >= 4

      json.set! card.id do 
        json.extract! card, :id, :title
        json.collection_id collection.id
        json.img card.img.attached? ? url_for(card.img) : nil
      end
    end

  end
end