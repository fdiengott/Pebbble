class AddTwoIndexUniqueConstraintToFollows < ActiveRecord::Migration[5.2]
  def change
    remove_index :follows, :creator_id
    add_index :follows, [:creator_id, :follower_id], unique: true
  end
end
