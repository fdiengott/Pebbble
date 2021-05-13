class Card < ApplicationRecord 

  validates :title, uniqueness: { scope: :creator_id }
  validates :animated, inclusion: { in: [true, false] }
  validates :style, inclusion: { in: [ "typography", "illustration", "animation", "web design" ]}

  has_one_attached :img
  belongs_to :creator,
    foreign_key: :creator_id, 
    class_name: :User




end