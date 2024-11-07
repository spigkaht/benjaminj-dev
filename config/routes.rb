Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  root to: "pages#index"
  get "/projects/parmageddon", to: "projects#parmageddon", as: "parmageddon"
  get "/projects/brapp", to: "projects#brapp", as: "brapp"
end
