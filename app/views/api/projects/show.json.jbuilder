json.extract! @project, :id, :title, :description, :funding_goal, :pledged, :location, :close_date, :created_at, :updated_at
json.photo_url url_for(@project.photo)



