import { Component, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
    selector: 'my-company-detail',
    templateUrl: 'app/templates/company-detail.component.html',
    styleUrls: ['css/dashboard.component.css']
})

export class CompanyDetailComponent implements OnInit{

    //The data we work with in this component
    company: Company;
    errorMessage: string;

    //Avoid complex stuff in the constructor.
    //Just inject the components we need.
    constructor(
        private companyService: CompanyService,
        private routeParams: RouteParams
    ) { }

    //fetch company when our app is ready
    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.companyService.getCompany(id)
            .subscribe(
                company => this.company = company,
                error => this.errorMessage = <any>error
            );
    }

    //back button, could properly be moved to app component,
    //depends on complexity of other components
    goBack() {
        window.history.back();
    }

}
