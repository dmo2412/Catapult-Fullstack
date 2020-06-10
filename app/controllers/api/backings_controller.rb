class Api::BackingsController < ApplicationController

    def create
        @backing = Backing.new(backing_params)
        if @backing.save
            @project = @backing.project 
            render 'api/projects/show'
        else
            render json: @backing.errors.full_messages, status: 401
        end

    end


    def backing_params
        params.require(:backing).permit(:backer_id, :amount_pledged, :project_id)
    end

end