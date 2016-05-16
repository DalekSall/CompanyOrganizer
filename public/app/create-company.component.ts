//import required system components 
import { Component, OnInit} from '@angular/core';

//import our own defined components
import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
    selector: 'create-company',
    templateUrl: 'app/templates/create-compny.component.html',
    styleUrls: ['css/dashboard.component.css']
})

export class CreateCompanyComponent {

    //The data we work with in this component
    response: string;
    errorMessage: string;

    //Avoid complex stuff in the constructor.
    //Just inject the components we need. 
    constructor(
        private companyService: CompanyService
    ) { }

    goBack() {
        window.history.back();
    }

    //call for creating new component
    //with our company service
    createCompany(name, cvr, address, city, country, phone) {
        if(!name || !cvr || !address || !city || !country) {
            return;
        }
        //phone is optional, for now we just reset it to 0
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
