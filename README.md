#Simple Company Organizer
A small application for handling and presenting companies.
Main purpose is to get practice in Anglar2.

See compiled version: https://companyorganizer.herokuapp.com/

##technolgies
* Angular2
* Ruby v.2.3.0p0
* Typescript v1.8.10

##local instalation
1. in "/app/" run  
```
npm install
```
2. in "/app/" run  
```
npm start" or "npm tsc
```
3. in "/" run   
```
ruby app.rb
```
4. open localhost:4567, and you are up and running. 

##API calls:
* Fetch all companies  
```
   GET: /api/companies  
   curl -i http://localhost:4567/companies  
```
* Fetch specific company by id  
```
   GET: /api/company/:id  
   curl -i http://localhost:4567/company/1  
```
* creates new company from posted associative array/hash  
```
   POST: /api/company/   
```

##TO DO: 
* Create SQLite database
* Find clever way to handle compiled js files when deploying
* Auth for API, depends on privacy
* Get awsome styling from designer
* Refactor company details component to be used in companies view
* Integrate creating with cvrapi.dk
* Find clever ways to avoid repetition in components
* Optimize speed (it takes ages to start)
* Optimize flow when creating new company
* Validate and sanitize input
