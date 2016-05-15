import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Company } from './company';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyService } from './company.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-companies',
    templateUrl: 'app/templates/companies.component.html',
    styleUrls: ['css/companies.component.css'],
    directives: [CompanyDetailComponent]

})

export class CompaniesComponent implements OnInit {
    title = "Companies";
    companies: Company[];
    selectedCompany: Company;

    constructor(
        private router: Router,
        private companyService: CompanyService
    ) { }

    ngOnInit() {
        this.getCompanies()
    }

    getCompanies() {
        this.companyService.getCompanies().then(companies => this.companies = companies);
    }

    onSelect(company: Company) {this.selectedCompany = company; }

    gotoDetail() {
        this.router.navigate(['CompanyDetail', {id: this.selectedCompany.id}]);
    }
}
