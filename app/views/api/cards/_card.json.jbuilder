
json.extract! card, :id, :title, :creator_id, :category
json.url card.img.attached? ? url_for(card.img) : nil
