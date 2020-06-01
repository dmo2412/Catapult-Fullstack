class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.integer :category_id, null: false
      t.string :creator_name, null: false
      t.integer :creator_id, null: false
      t.integer :funding_goal
      t.string :description
      t.integer :pledged
    end
    add_index :projects, :category_id
    add_index :projects, :creator_id
  end
end
