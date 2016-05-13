import { Component } from '@angular/core';

export class Company {
    id      : number;
    name    : string;
    //cvr     : number;
    //name    : string;
    //adress  : string;
    //city    : string;
    //country : string;
    //phone   : number
}

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>

        <h2>my companies</h2>
        <ul class="companies">
            <li *ngFor="let company of companies"
                [class.selected]="company === selectedCompany"
                (click)="onSelect(company)">
                <span class="badge">{{company.id}}</span> {{company.name}}
            </li>
        </ul>

        <div *ngIf="selectedCompany">
            <h2>{{selectedCompany.name}} details</h2>
            <div><label>id: </label>{{selectedCompany.id}}</div>
            <div>
                <label>name: </label>
                <input [(ngModel)]="selectedCompany.name" placeholder="name">
            </div>
        </div>

      <!--<div>
        <label>cvr: </label>
        <input value="{{company.cvr}}" placeholder="cvr">
      </div>
      <div>
        <label>adress: </label>
        <input value="{{company.address}}" placeholder="address">
      </div>
      <div>
        <label>city: </label>
        <input value="{{company.city}}" placeholder="city">
      </div>
      <div>
        <label>country: </label>
        <input value="{{company.country}}" placeholder="country">
      </div>
      <div>
        <label>phone: </label>
        <input value="{{company.phone}}" placeholder="phone">
      </div>-->
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
    `]
})

export class AppComponent {
    title = "Companies";
    public companies = COMPANIES;
    selectedCompany: Company;

    onSelect(company: Company) {this.selectedCompany = company; }
}

var COMPANIES: Company[] = [
    {"id": 1, "name": "SallCorp"},
    {"id": 2, "name": "BlahCorp"},
    {"id": 3, "name": "EvilCorp"},
    {"id": 4, "name": "StupidCorp"},
    {"id": 5, "name": "BobCorp"}
];

