class Api::ProjectsController < ApplicationController

    def index 
        @projects = Project.all
        render :index
    end

    def show
        @project = Project.find(params[:id])
        render :show
    end

    def create 
        @project = Project.new(project_params)
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages, status: 412
        end
    end

    def update
        @project = Project.find(params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 412
        end
    end

    def destroy
        @project = Project.find(params[:id])
        @project.destroy
        render :show
    end

    private
    def project_params
        params.require(:project).permit(:title, :category_id, :creator_name, :creator_id, :location, :funding_goal, :description, :close_date, :photo)
    end

end