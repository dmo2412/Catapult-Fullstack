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

ActiveRecord::Schema.define(version: 2020_06_01_185145) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backings", force: :cascade do |t|
    t.integer "backer_id", null: false
    t.integer "amount_pledged", null: false
    t.integer "project_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["backer_id"], name: "index_backings_on_backer_id"
    t.index ["project_id"], name: "index_backings_on_project_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title", null: false
    t.integer "category_id", null: false
    t.string "creator_name", null: false
    t.integer "creator_id", null: false
    t.integer "funding_goal"
    t.string "description"
    t.integer "pledged"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_projects_on_category_id"
    t.index ["creator_id"], name: "index_projects_on_creator_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end