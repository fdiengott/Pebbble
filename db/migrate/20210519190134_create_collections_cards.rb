class CreateCollectionsCards < ActiveRecord::Migration[5.2]
  def change
    create_table :collections_cards do |t|
      t.timestamps
    end

    add_reference :collections_cards, :collection, foreign_key: { to_table: :collections }, null: false
    add_reference :collections_cards, :card, foreign_key: { to_table: :cards }, null: false

  end
end
