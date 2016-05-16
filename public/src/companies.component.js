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
var router_deprecated_1 = require('@angular/router-deprecated');
var company_detail_component_1 = require('./company-detail.component');
var company_service_1 = require('./company.service');
var CompaniesComponent = (function () {
    //Avoid complex stuff in the constructor.
    //Just inject the components we need. 
    function CompaniesComponent(router, companyService) {
        this.router = router;
        this.companyService = companyService;
    }
    //fetch companies when our app is ready
    CompaniesComponent.prototype.ngOnInit = function () {
        this.getCompanies();
    };
    //fetch companies from our company service
    CompaniesComponent.prototype.getCompanies = function () {
        var _this = this;
        this.companyService.getCompanies()
            .subscribe(function (companies) { return _this.companies = companies; }, function (error) { return _this.errorMessage = error; });
    };
    //When a company is selected, we keep it
    CompaniesComponent.prototype.onSelect = function (company) {
        this.selectedCompany = company;
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            selector: 'companies',
            templateUrl: 'app/templates/companies.component.html',
            styleUrls: ['css/companies.component.css'],
            directives: [company_detail_component_1.CompanyDetailComponent]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, company_service_1.CompanyService])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=companies.component.js.map