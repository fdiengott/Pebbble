class RenameCardsStyleToCategory < ActiveRecord::Migration[5.2]
  def change
    rename_column :cards, :style, :category
  end
end
