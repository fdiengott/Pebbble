class AddRemoveConstraintFromCards < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:cards, :description, true)
  end
end
