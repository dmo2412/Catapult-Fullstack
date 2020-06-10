class EditColumName < ActiveRecord::Migration[5.2]
  def change
    rename_column :projects, :image_url, :photo
  end
end
