@projects.each do |project|
    json.set! project.id do
        json.extract! project, :id, :title, :category_id, :creator_id, :funding_goal, :description, :pledged, :location, :photo
        json.photo_url url_for(project.photo) if project.photo.attached?
    end
end