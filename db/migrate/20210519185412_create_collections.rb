class CreateCollections < ActiveRecord::Migration[5.2]
  def change
    create_table :collections do |t|
      t.string :title, null: false, unique: true 
      t.timestamps
    end
    
    add_reference :collections, :curator, foreign_key: { to_table: :users }, null: false
  end
end
