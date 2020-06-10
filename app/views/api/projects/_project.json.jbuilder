# debugger
# json.extract! project, :id, :title, :category_id, :funding_goal, :description, :location, :close_date

# if project
    json.extract! project, :id, :title, :creator_id, :funding_goal, :description, :pledged, :location, :close_date, :created_at, :updated_at, :photo_url
    # if project.image.attached?
    #     json.photo_url url_for(project.image)
    # end
# end
