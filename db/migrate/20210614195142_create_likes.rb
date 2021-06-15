class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.timestamps
    end

    add_reference :likes, :liker, foreign_key: { to_table: :users }, null: false
    add_reference :likes, :card, foreign_key: { to_table: :cards }, null: false
    add_index :likes, [:liker_id, :card_id], unique: true
  end
end
