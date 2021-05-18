class Follow < ApplicationRecord

  belongs_to :follower, 
    foreign_key: :follower_id, 
    class_name: :User
  belongs_to :creator, 
    foreign_key: :creator_id, 
    class_name: :User



end