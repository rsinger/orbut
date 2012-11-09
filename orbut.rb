require 'sinatra'
require 'haml'
require 'json'

get '/' do
  haml :index
end

get '/hail' do
  haml :hail_query
end

post '/hail' do
  haml :save_query
end