class Card < ApplicationRecord 

  validates :title, uniqueness: { scope: :creator_id }
  validates :animated, inclusion: { in: [true, false] }
  validates :category, inclusion: { in: [ "typography", "illustration", "animation", "web design" ]}
  # validate :ensure_img

  has_one_attached :img, dependent: :destroy
  belongs_to :creator,
    foreign_key: :creator_id, 
    class_name: :User

  has_one :profile_picture, 
    through: :creator, 
    source: :profile_picture_attachment

  has_many :received_collections_cards, 
    foreign_key: :card_id, 
    class_name: :CollectionsCard, 
    dependent: :destroy
  
  has_many :collections, 
    through: :received_collections_cards, 
    source: :collection

  has_many :likes, 
    foreign_key: :card_id, 
    class_name: :Like,
    dependent: :destroy

  has_many :likers, 
    through: :likes, 
    source: :liker

  def ensure_img
    unless self.img.attached? 
      errors[:card] << "File must be added"
    end
  end

end