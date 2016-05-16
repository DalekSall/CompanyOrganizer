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
var companies_component_1 = require('./companies.component');
var company_detail_component_1 = require('./company-detail.component');
var dashboard_component_1 = require('./dashboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Companies";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>{{title}}</h1>\n      <nav>\n        <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n        <a [routerLink]=\"['Companies']\">Companies</a>\n      </nav>\n      <router-outlet></router-outlet>\n    ",
            styleUrls: ['css/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
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
                path: '/detail/:id',
                name: 'CompanyDetail',
                component: company_detail_component_1.CompanyDetailComponent
            },
            {
                path: '/companies',
                name: 'Companies',
                component: companies_component_1.CompaniesComponent,
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map