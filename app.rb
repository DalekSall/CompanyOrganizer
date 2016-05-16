require 'sinatra'
require 'json'

#Test data
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

#Routes
##Fetch all companies
get '/api/companies' do
  testCompanies.to_json()
end

##Fetch single company
get '/api/company/:id' do
  #param starts as string, also easy sanitation
  companyId = params['id'].to_i;
  company = testCompanies.find {| currentCompany | currentCompany[:id] == companyId }
  company.to_json()
end

post '/api/company/' do
  request.body.rewind
  data = JSON.parse request.body.read
  latestCompany = testCompanies.last
  latesId = latestCompany[:id] + 1
  testCompanies.push({
    :id => latesId,
    :name => data['name'],
    :cvr => data['cvr'],
    :address => data['address'],
    :city => data['city'],
    :country => data['country'],
    :phone => data['phone'],
  });
  "success".to_json()
end

##We want angular to take care of everything else
get '/*' do
  File.read(File.join('public', 'index.html'))
end
