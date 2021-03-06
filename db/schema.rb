# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_14_195142) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "cards", force: :cascade do |t|
    t.integer "creator_id", null: false
    t.string "title", null: false
    t.string "description"
    t.boolean "animated", default: false, null: false
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["creator_id", "title"], name: "index_cards_on_creator_id_and_title", unique: true
  end

  create_table "collections", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "curator_id", null: false
    t.index ["curator_id"], name: "index_collections_on_curator_id"
  end

  create_table "collections_cards", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "collection_id", null: false
    t.bigint "card_id", null: false
    t.index ["card_id", "collection_id"], name: "index_collections_cards_on_card_id_and_collection_id", unique: true
    t.index ["collection_id"], name: "index_collections_cards_on_collection_id"
  end

  create_table "follows", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "follower_id", null: false
    t.bigint "creator_id", null: false
    t.index ["creator_id", "follower_id"], name: "index_follows_on_creator_id_and_follower_id", unique: true
    t.index ["follower_id"], name: "index_follows_on_follower_id"
  end

  create_table "likes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "liker_id", null: false
    t.bigint "card_id", null: false
    t.index ["card_id"], name: "index_likes_on_card_id"
    t.index ["liker_id", "card_id"], name: "index_likes_on_liker_id_and_card_id", unique: true
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "name", null: false
    t.string "location"
    t.string "email", null: false
    t.text "bio"
    t.string "website_url"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "collections", "users", column: "curator_id"
  add_foreign_key "collections_cards", "cards"
  add_foreign_key "collections_cards", "collections"
  add_foreign_key "follows", "users", column: "creator_id"
  add_foreign_key "follows", "users", column: "follower_id"
  add_foreign_key "likes", "cards"
  add_foreign_key "likes", "users", column: "liker_id"
end
