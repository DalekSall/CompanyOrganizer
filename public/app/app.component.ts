import { Component } from '@angular/core';
import { Company } from './company';
import { CompanyDetailComponent } from './company-detail.component';
import { CompanyService } from './company.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>

        <h2>My Companies</h2>
        <ul class="companies">
            <li *ngFor="let company of companies"
                [class.selected]="company === selectedCompany"
                (click)="onSelect(company)">
                <span class="badge">{{company.id}}</span> {{company.name}}
            </li>
        </ul>
        <my-company-detail [company]="selectedCompany"></my-company-detail>
    `,
    styles:[`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .companies{
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .companies li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .companies li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .companies li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .companies .text {
        position: relative;
        top: -3px;
      }
      .companies .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    directives: [CompanyDetailComponent],
    providers: [CompanyService]

})

export class AppComponent implements OnInit {
    title = "Companies";
    companies: Company[];
    selectedCompany: Company;

    constructor(private companyService: CompanyService) { }

    ngOnInit() {
        this.getCompanies()
    }

    getCompanies() {
        this.companyService.getCompanies().then(companies => this.companies = companies);
    }

    onSelect(company: Company) {this.selectedCompany = company; }
}
