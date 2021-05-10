# == Route Map
#
#                    Prefix Verb   URI Pattern                          Controller#Action
#               api_session DELETE /api/session(.:format)               api/sessions#destroy {:format=>:json}
#                           POST   /api/session(.:format)               api/sessions#create {:format=>:json}
#                 api_users GET    /api/users(.:format)                 api/users#index {:format=>:json}
#                           POST   /api/users(.:format)                 api/users#create {:format=>:json}
#              new_api_user GET    /api/users/new(.:format)             api/users#new {:format=>:json}
#             edit_api_user GET    /api/users/:id/edit(.:format)        api/users#edit {:format=>:json}
#                  api_user GET    /api/users/:id(.:format)             api/users#show {:format=>:json}
#                           PATCH  /api/users/:id(.:format)             api/users#update {:format=>:json}
#                           PUT    /api/users/:id(.:format)             api/users#update {:format=>:json}
#                           DELETE /api/users/:id(.:format)             api/users#destroy {:format=>:json}
#                      root GET    /                                    static_pages#root

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    # AUTH
    resource :session, only: [:create, :destroy]
    resources :users

  end

  root to: 'static_pages#root'

end
