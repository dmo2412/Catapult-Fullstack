class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(user)
            render 'api/users/show'
        else
            render json: ['invalid email or password']
        end
    end

    def destroy 
        logout
        redirect_to new_session_url
    end



end