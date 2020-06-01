Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api do
    resources :user, only: [:create]
  end


end
