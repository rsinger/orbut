require 'sinatra'
require 'haml'
require 'json'

get '/' do
  haml :index
end

