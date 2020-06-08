class RemoveCreatorNameFromProjectsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :creator_name
  end
end
