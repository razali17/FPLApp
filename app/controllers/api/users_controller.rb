class Api::UsersController < ApplicationController
  def index
    @users = User.all

    render :json => {
      users: @users
    }
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      head(:unprocessable_entity)
    end
  end

  def destroy
    @user = User.where(id: params[:id]).first
    if @user.destroy
      head(:ok)
    else
      head(:unprocessable_entity)
    end
  end


  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :password, :password_confirmation, :email)
  end
end