//import required system components 
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

//import our own defined components
import { CompanyService } from './company.service';
import { CompaniesComponent } from './companies.component';
import { CompanyDetailComponent } from './company-detail.component';
import { CreateCompanyComponent } from './create-company.component';
import { DashboardComponent } from './dashboard.component';

@Component({
    selector: 'my-app',
    //Define the outline for our app, its not big, so we just use inline here
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Companies']">Companies</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['css/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    //company Service delivers the companies
    providers: [
        ROUTER_PROVIDERS,
        CompanyService
    ]
})

@RouteConfig ([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/company/:id',
        name: 'CompanyDetail',
        component: CompanyDetailComponent
    },
    {
        path: '/companies',
        name: 'Companies',
        component: CompaniesComponent,
    },
    {
        path: '/company/create',
        name: 'CreateCompany',
        component: CreateCompanyComponent
    }

])

export class AppComponent {
    title = "Companies";
}
