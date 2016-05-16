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
var company_service_1 = require('./company.service');
var CreateCompanyComponent = (function () {
    function CreateCompanyComponent(companyService) {
        this.companyService = companyService;
    }
    CreateCompanyComponent.prototype.goBack = function () {
        window.history.back();
    };
    CreateCompanyComponent.prototype.createCompany = function (name, cvr, address, city, country, phone) {
        var _this = this;
        if (!name || !cvr || !address || !city || !country) {
            return;
        }
        if (!phone) {
            phone = 0;
        }
        this.companyService.addCompany(name, cvr, address, city, country, phone)
            .subscribe(function (response) { return _this.response = response; }, function (error) { return _this.errorMessage = error; });
    };
    CreateCompanyComponent = __decorate([
        core_1.Component({
            selector: 'create-company',
            templateUrl: 'app/templates/create-compny.component.html',
            styleUrls: ['css/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [company_service_1.CompanyService])
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());
exports.CreateCompanyComponent = CreateCompanyComponent;
//# sourceMappingURL=create-company.component.js.map