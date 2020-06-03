class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user
            login(@user)
            render json: 'api/users/show'
            # redirect_to user_url(@user)
        else
            render json: ['invalid email or password'], status: 401
        end
    end

    def destroy 
        logout
        render json: {}
    end



end