# json.partial! "api/projects/project", project: @project

# json.id @project.id
# json.title @project.title
# json.creator_id @project.creator_id
# json.funding_goal @project.funding_goal
# json.description @project.description
# json.pledged @project.pledged
# json.location @project.location
# json.close_date @project.close_date

# json.project do 
json.extract! @project, :id, :title, :description, :funding_goal, :pledged, :location, :close_date, :created_at, :updated_at
# , :creator_id, :funding_goal, :description, :pledged, :location, :close_date, :photo, :created_at, :updated_at
json.photo_url url_for(@project.photo)
# end


