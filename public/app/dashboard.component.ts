import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/templates/dashboard.component.html',
    styleUrls: ['css/dashboard.component.css']

})

export class DashboardComponent implements OnInit {

    //The data we work with in this component
    companies: Company[] = [];
    errorMessage: string;

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

    //When we clik on a company, we go to a details page
    gotoDetail(company: Company) {
        let link = ['CompanyDetail', {id: company.id}];
        this.router.navigate(link);
    }

}
