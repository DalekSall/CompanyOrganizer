import { Component, OnInit} from '@angular/core';

import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
    selector: 'create-company',
    templateUrl: 'app/templates/create-compny.component.html',
    styleUrls: ['css/dashboard.component.css']
})

export class CreateCompanyComponent {

    response: string;
    errorMessage: string;

    constructor(
        private companyService: CompanyService
    ) { }

    goBack() {
        window.history.back();
    }

    createCompany(name, cvr, address, city, country, phone) {
        if(!name || !cvr || !address || !city || !country) {
            return;
        }
        if(!phone){
            phone = 0;
        }
        this.companyService.addCompany(name, cvr, address, city, country, phone)
            .subscribe(
              response => this.response = response,
              error => this.errorMessage = <any>error
            );
    }

}
