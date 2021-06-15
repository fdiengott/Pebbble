class Like < ApplicationRecord 
  belongs_to :liker, foreign_key: :liker_id, class_name: :User
  belongs_to :liked_card, foreign_key: :card_id, class_name: :Card
end