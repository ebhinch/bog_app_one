
Rails.application.routes.draw do
  namespace :api do
    get "/creatures", to: "creatures#index", as: "creatures"
    post "/creatures", to: "creatures#create"
    get "/creatures/:id", to: "creatures#show", as: "creature"
    patch "/creatures/:id", to: "creatures#update"
    delete "/creatures/:id", to: "creatures#destroy"
  end
end