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
//import our own defined components
var company_service_1 = require('./company.service');
var companies_component_1 = require('./companies.component');
var company_detail_component_1 = require('./company-detail.component');
var create_company_component_1 = require('./create-company.component');
var dashboard_component_1 = require('./dashboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Companies";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            //Define the outline for our app, its not big, so we just use inline here
            template: "\n      <h1>{{title}}</h1>\n      <nav>\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Companies']\">Companies</a>\n        <a [routerLink]=\"['CreateCompany']\">Create Company</a>\n      </nav>\n      <router-outlet></router-outlet>\n    ",
            styleUrls: ['css/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            //company Service delivers the companies
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                company_service_1.CompanyService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: dashboard_component_1.DashboardComponent,
                useAsDefault: true
            },
            {
                path: '/company/:id',
                name: 'CompanyDetail',
                component: company_detail_component_1.CompanyDetailComponent
            },
            {
                path: '/companies',
                name: 'Companies',
                component: companies_component_1.CompaniesComponent,
            },
            {
                path: '/company/create',
                name: 'CreateCompany',
                component: create_company_component_1.CreateCompanyComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map