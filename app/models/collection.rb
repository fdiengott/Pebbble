class Collection < ApplicationRecord 

  belongs_to :curator, 
    foreign_key: :curator_id, 
    class_name: :User

end