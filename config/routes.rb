Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/*
  get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker
  get "manifest" => "rails/pwa#manifest", as: :pwa_manifest

  resource :shadcn, only: [] do
    resource :combobox, only: [ :show ], controller: :react
    resource :tooltip, only: [ :show ], controller: :react
    resource :select, only: [ :show ], controller: :react
  end

  resource :phlex, only: [] do
    resource :combobox, only: [ :show ], to: "phlex#combobox"
    resource :tooltip, only: [ :show ], to: "phlex#tooltip"
    resource :select, only: [ :show ], to: "phlex#select"
  end

  # Defines the root path route ("/")
  root "main#index"
end
