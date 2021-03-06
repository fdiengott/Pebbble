class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :name, null: false
      t.string :location, null: false
      t.string :email, null: false
      t.string :bio
      t.string :website_url
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :email, unique: true
  end
end
