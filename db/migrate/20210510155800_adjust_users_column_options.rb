class AdjustUsersColumnOptions < ActiveRecord::Migration[5.2]
  def change
    change_column_null :users, :location, true
    add_timestamps :users
  end
end
