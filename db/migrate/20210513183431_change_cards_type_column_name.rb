class ChangeCardsTypeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :cards, :type, :style
  end
end
