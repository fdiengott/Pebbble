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

  def ensure_img
    unless self.img.attached? 
      errors[:card] << "File must be added"
    end
  end


end