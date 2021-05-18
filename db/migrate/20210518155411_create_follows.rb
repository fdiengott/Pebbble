class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.timestamps 
    end
    add_reference :follows, :follower, foreign_key: { to_table: :users }, null: false
    add_reference :follows, :creator, foreign_key: { to_table: :users }, null: false
  end
end
