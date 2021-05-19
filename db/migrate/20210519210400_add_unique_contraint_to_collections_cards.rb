class AddUniqueContraintToCollectionsCards < ActiveRecord::Migration[5.2]
  def change
    add_index :collections_cards, [:card_id, :collection_id], unique: true
    remove_index :collections_cards, :card_id
  end
end
