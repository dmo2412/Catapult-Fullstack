class AddLocationAndDateToProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :projects, :location, :string
    add_column :projects, :close_date, :date
  end
end
