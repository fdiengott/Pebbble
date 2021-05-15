
json.extract! card, :id, :title, :creator_id, :category, :animated
json.img card.img.attached? ? url_for(card.img) : nil
