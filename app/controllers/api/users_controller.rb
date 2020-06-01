class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            sign_in!(@user)
            #render to show page/ come back to fix this
        else  
            render json: @user.errors.full_messages
        end
    end
    

    private
    def user_params
        params.require(:user).permit(:username, :password)
    end

end