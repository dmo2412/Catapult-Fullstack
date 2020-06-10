class Api::CategoriesController < ApplicationController 

    def index
        @categories = Category.all 
        render :index
    end

    def show
        @category = Category.find_by(id: params[:id])
        @projects = category.projects 
        render '/api/projects/index.json.jbuilder'
    end

end