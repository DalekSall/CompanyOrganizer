"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import required system components 
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
//This class is injectable
var CompanyService = (function () {
    //Avoid complex stuff in the constructor.
    //Just inject the components we need. 
    function CompanyService(http) {
        this.http = http;
        //Our api routes
        this.companiesUrl = 'api/companies';
        this.companyUrl = 'api/company/';
    }
    //we create an observable our other components
    //can subscribe to.
    //Fetch alle companies from our webservice
    CompanyService.prototype.getCompanies = function () {
        return this.http.get(this.companiesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //fetch a single company from our webservice
    CompanyService.prototype.getCompany = function (id) {
        return this.http.get(this.companyUrl + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //sendst the company to our webserver
    //just gets an "success" string
    CompanyService.prototype.addCompany = function (name, cvr, address, city, country, phone) {
        var body = JSON.stringify({ name: name, cvr: cvr, address: address, city: city, country: country, phone: phone });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.companyUrl, body, options).catch(this.handleError);
    };
    //helper method for checking response and extracting the data
    CompanyService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body || {};
    };
    //helper method for handling errors
    CompanyService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    CompanyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map