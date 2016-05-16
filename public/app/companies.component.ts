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
    errorMessage: string;
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
        this.companyService.getCompanies()
            .subscribe(
                companies => this.companies = companies,
                error => this.errorMessage = <any>error
            );
    }

    addCompany( name: string) {
        if(!name) {return;}
        this.companyService.addCompany(name)
            .subscribe(
                company => this.companies.push(company),
                error => this.errorMessage = <any>error
            );
    }

    onSelect(company: Company) {this.selectedCompany = company; }

    gotoDetail() {
        this.router.navigate(['CompanyDetail', {id: this.selectedCompany.id}]);
    }
}
