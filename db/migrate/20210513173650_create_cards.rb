class CreateCards < ActiveRecord::Migration[5.2]
  def change
    create_table :cards do |t|
      t.integer :creator_id, null: false, references: :user
      t.string :title, null: false
      t.string :description, null: false
      t.boolean :animated, null: false
      t.string :type, null: false
      t.timestamps
    end

    add_index :cards, [:creator_id, :title], unique: true
  end
end
