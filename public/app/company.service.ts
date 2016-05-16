import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';

import { Company } from './company';
import { Observable } from 'rxjs/Observable';
//Mock companies for testing purposes
//import { COMPANIES } from './mock-companies';

@Injectable()
export class CompanyService {

    constructor (private http: Http) {}

    private companiesUrl = 'api/companies'
    private companyUrl   = 'api/company/'

    getCompanies(): Observable<Company[]> {
        return this.http.get(this.companiesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addCompany (name: string): Observable<Company> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.companiesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        if(res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    getCompany(id: number) {
        return this.http.get(this.companyUrl+id)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
