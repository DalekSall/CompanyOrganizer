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

    constructor(
        private router: Router,
        private companyService: CompanyService
    ) { }

    ngOnInit() {
        this.companyService.getCompanies()
            .then(companies => this.companies = companies.slice(1,5));
    }

    gotoDetail(company: Company) {
        let link = ['CompanyDetail', {id: company.id}];
        this.router.navigate(link);
    }

}
