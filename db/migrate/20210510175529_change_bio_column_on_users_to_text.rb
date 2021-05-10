class ChangeBioColumnOnUsersToText < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :bio, :text
  end
end
