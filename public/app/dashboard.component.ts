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

    companies: Company[] = [];
    errorMessage: string;

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


    gotoDetail(company: Company) {
        let link = ['CompanyDetail', {id: company.id}];
        this.router.navigate(link);
    }

}
