# == Route Map
#
#         Prefix Verb   URI Pattern                                          Controller#Action
#    api_session DELETE /api/session(.:format)                               api/sessions#destroy {:format=>:json}
#                POST   /api/session(.:format)                               api/sessions#create {:format=>:json}

#      api_users GET    /api/users(.:format)                                 api/users#index {:format=>:json}
#                POST   /api/users(.:format)                                 api/users#create {:format=>:json}
#       api_user GET    /api/users/:id(.:format)                             api/users#show {:format=>:json}
#                PATCH  /api/users/:id(.:format)                             api/users#update {:format=>:json}
#                PUT    /api/users/:id(.:format)                             api/users#update {:format=>:json}
#                DELETE /api/users/:id(.:format)                             api/users#destroy {:format=>:json}

#      api_cards GET    /api/cards(.:format)                                 api/cards#index {:format=>:json}
#                POST   /api/cards(.:format)                                 api/cards#create {:format=>:json}
#       api_card GET    /api/cards/:id(.:format)                             api/cards#show {:format=>:json}
#                PATCH  /api/cards/:id(.:format)                             api/cards#update {:format=>:json}
#                PUT    /api/cards/:id(.:format)                             api/cards#update {:format=>:json}
#                DELETE /api/cards/:id(.:format)                             api/cards#destroy {:format=>:json}

#            api GET    /api/users/:creator_id/cards(.:format)               api/user_cards#index {:format=>:json}

#    api_follows POST   /api/follows(.:format)                               api/follows#create {:format=>:json}
#     api_follow DELETE /api/follows/:id(.:format)                           api/follows#destroy {:format=>:json}

#                GET    /api/users/:creator_id/followers(.:format)           api/user_followers#index {:format=>:json}
#                GET    /api/users/:follower_id/followings(.:format)         api/user_followings#index {:format=>:json}

#           root GET    /                                                    static_pages#root

#  api_session DELETE /api/session(.:format)                  api/sessions#destroy {:format=>:json}
#              POST   /api/session(.:format)                  api/sessions#create {:format=>:json}

#    api_users GET    /api/users(.:format)                    api/users#index {:format=>:json}
#              POST   /api/users(.:format)                    api/users#create {:format=>:json}
#     api_user GET    /api/users/:id(.:format)                api/users#show {:format=>:json}
#              PATCH  /api/users/:id(.:format)                api/users#update {:format=>:json}
#              PUT    /api/users/:id(.:format)                api/users#update {:format=>:json}
#              DELETE /api/users/:id(.:format)                api/users#destroy {:format=>:json}

#    api_cards GET    /api/cards(.:format)                    api/cards#index {:format=>:json}
#              POST   /api/cards(.:format)                    api/cards#create {:format=>:json}
#     api_card GET    /api/cards/:id(.:format)                api/cards#show {:format=>:json}
#              PATCH  /api/cards/:id(.:format)                api/cards#update {:format=>:json}
#              PUT    /api/cards/:id(.:format)                api/cards#update {:format=>:json}
#              DELETE /api/cards/:id(.:format)                api/cards#destroy {:format=>:json}

#          api GET    /api/users/:creator_id/cards(.:format)  api/user_cards#index {:format=>:json}

#  api_follows POST   /api/follows(.:format)                  api/follows#create {:format=>:json}
#   api_follow DELETE /api/follows/:id(.:format)              api/follows#destroy {:format=>:json}
#         root GET    /                                       static_pages#root


Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do 
    resource :session, only: [:create, :destroy]
    resources :users, except: [:new, :edit] 

    resources :cards, except: [:new, :edit]

    # custom controller to keep cards controller skinny api endpoints RESTful
    get '/users/:creator_id/cards', to: 'user_cards#index'

    resources :follows, only: [:create, :destroy]

    # to get all of the followers of a user
    get '/users/:creator_id/followers', to: 'user_followers#index'

    # to get all of the users a user is following
    get '/users/:follower_id/followings', to: 'user_followings#index'

  end

  root to: 'static_pages#root'

end
