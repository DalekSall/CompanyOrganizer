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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var company_service_1 = require('./company.service');
var CompanyDetailComponent = (function () {
    //Avoid complex stuff in the constructor.
    //Just inject the components we need.
    function CompanyDetailComponent(companyService, routeParams) {
        this.companyService = companyService;
        this.routeParams = routeParams;
    }
    //fetch company when our app is ready
    CompanyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.companyService.getCompany(id)
            .subscribe(function (company) { return _this.company = company; }, function (error) { return _this.errorMessage = error; });
    };
    //back button, could properly be moved to app component,
    //depends on complexity of other components
    CompanyDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    CompanyDetailComponent = __decorate([
        core_1.Component({
            selector: 'company-detail',
            templateUrl: 'app/templates/company-detail.component.html',
            styleUrls: ['css/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [company_service_1.CompanyService, router_deprecated_1.RouteParams])
    ], CompanyDetailComponent);
    return CompanyDetailComponent;
}());
exports.CompanyDetailComponent = CompanyDetailComponent;
//# sourceMappingURL=company-detail.component.js.map