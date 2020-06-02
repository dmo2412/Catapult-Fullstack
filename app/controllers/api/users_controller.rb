class Api::UsersController < ApplicationController

    
    def create
        @user = User.new(user_params)
        if @user.save
            sign_in!(@user)
            redirect_to users_url
        else  
            render json: @user.errors.full_messages
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end
    

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end

end