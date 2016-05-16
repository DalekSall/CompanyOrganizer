import { Component, OnInit} from '@angular/core';

import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
    selector: 'create-company',
    templateUrl: 'app/templates/create-compny.component.html',
    styleUrls: ['css/dashboard.component.css']
})

export class CreateCompanyComponent {

    company: Company;
    errorMessage: string;

    constructor(
        private companyService: CompanyService
    ) { }

    goBack() {
        window.history.back();
    }

}
