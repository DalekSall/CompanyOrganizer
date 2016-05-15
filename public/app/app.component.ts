import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated'

import { CompanyService } from './company.service';
import { CompaniesComponent } from './companies.component';
import { CompanyDetailComponent } from './company-detail.component';
import { DashboardComponent } from './dashboard.component';

@Component({
    selector: 'my-app',
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
        path: '/detail/:id',
        name: 'CompanyDetail',
        component: CompanyDetailComponent
    },
    {
        path: '/companies',
        name: 'Companies',
        component: CompaniesComponent,
    }
])

export class AppComponent {
    title = "Companies";
}
