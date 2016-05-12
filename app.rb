require 'sinatra'
require 'json'

get '/company/*' do
  testCompany = {
    :cvr => 123456,
    :name => "SallCorp",
    :adress => "SallAvenue 2",
    :city => "SallCity",
    :country => "Salland",
    :phone => 87654321
  }
  testCompany.to_json()

end

get '/' do
  File.read(File.join('public', 'index.html'))
end
