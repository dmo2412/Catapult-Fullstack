class RenamePhot < ActiveRecord::Migration[5.2]
  def change
    rename_column :projects, :photo, :photo_url
  end
end
