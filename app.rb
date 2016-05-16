require 'sinatra'
require 'json'

testCompanies = [
  {
    :id => 1,
    :cvr => 123456,
    :name => "SallCorp",
    :adress => "Sallvej",
    :city => "SallCity",
    :country => "Salland",
    :phone => 12345678
  },
  {
    :id => 2,
    :cvr => 654321,
    :name => "BlahCorp",
    :adress => "Blahvej 3",
    :city => "SallCity",
    :country => "Salland",
    :phone => 87654321
  },
  {
    :id => 3,
    :cvr => 742893,
    :name => "EvilCorp",
    :adress => "Evilvej",
    :city => "EvilCity",
    :country => "Eviland",
    :phone => 93183198,
  },
  {
    :id => 4,
    :cvr => 393839,
    :name => "BobaCorp",
    :adress => "diskvej",
    :city => "BlasCity",
    :country => "Salland",
    :phone => 93948548,
  }

];

get '/api/companies' do
  testCompanies.to_json()
end

get '/api/company/:id' do
  #param starts as string, also easy sanitation
  companyId = params['id'].to_i;
  company = testCompanies.find {| currentCompany | currentCompany[:id] == companyId }
  company.to_json()
end

get '/*' do
  File.read(File.join('public', 'index.html'))
end
