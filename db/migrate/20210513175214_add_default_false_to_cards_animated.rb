class AddDefaultFalseToCardsAnimated < ActiveRecord::Migration[5.2]
  def change
    change_column_default :cards, :animated, false
  end
end
