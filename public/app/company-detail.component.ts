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

    company: Company;
    errorMessage: string;

    constructor(
        private companyService: CompanyService,
        private routeParams: RouteParams
    ) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.companyService.getCompany(id)
            .subscribe(
                company => this.company = company,
                error => this.errorMessage = <any>error
            );
    }

    goBack() {
        window.history.back();
    }

}
