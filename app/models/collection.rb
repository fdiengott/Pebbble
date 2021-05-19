class Collection < ApplicationRecord 

  belongs_to :curator, 
    foreign_key: :curator_id, 
    class_name: :User


  has_many :received_collections_cards, 
    foreign_key: :collection_id, 
    class_name: :CollectionsCard, 
    dependent: :destroy

  has_many :cards, 
    through: :received_collections_cards, 
    source: :card
  
  
end