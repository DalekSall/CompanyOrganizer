//import required system components 
import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router-deprecated';

//import our own defined components
import { Company } from './company';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyService } from './company.service';

@Component({
    selector: 'my-companies',
    templateUrl: 'app/templates/companies.component.html',
    styleUrls: ['css/companies.component.css']
    directives: [CompanyDetailComponent]
})

export class CompaniesComponent implements OnInit {

    //The data we work with in this component
    errorMessage: string;
    companies: Company[];
    selectedCompany: Company;

    //Avoid complex stuff in the constructor.
    //Just inject the components we need. 
    constructor(
        private router: Router,
        private companyService: CompanyService
    ) { }

    //fetch companies when our app is ready
    ngOnInit() {
        this.getCompanies()
    }

    //fetch companies from our company service
    getCompanies() {
        this.companyService.getCompanies()
            .subscribe(
                companies => this.companies = companies,
                error => this.errorMessage = <any>error
            );
    }

    //When a company is selected, we keep it
    onSelect(company: Company) {
        this.selectedCompany = company;
    }

}
