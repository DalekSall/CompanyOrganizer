//import required system components 
import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

//import our own defined components
import { Company } from './company';

//This class is injectable
@Injectable()
export class CompanyService {

    //Avoid complex stuff in the constructor.
    //Just inject the components we need. 
    constructor (private http: Http) {}

    //Our api routes
    private companiesUrl = 'api/companies'
    private companyUrl   = 'api/company/'

    //we create an observable our other components
    //can subscribe to.

    //Fetch alle companies from our webservice
    getCompanies(): Observable<Company[]> {
        return this.http.get(this.companiesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //fetch a single company from our webservice
    getCompany(id: number) {
        return this.http.get(this.companyUrl+id)
            .map(this.extractData)
            .catch(this.handleError);
    }


    //sendst the company to our webserver
    //just gets an "success" string
    addCompany (
        name: string,
        cvr: number,
        address: string,
        city: string,
        country: string,
        phone: number
    ): Observable<string> {
        let body = JSON.stringify({ name, cvr, address, city, country, phone });
        let headers = new Headers({ 'Content-Type' : 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.companyUrl, body, options).catch(this.handleError);
    }

    //helper method for checking response and extracting the data
    private extractData(res: Response) {
        if(res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }

    //helper method for handling errors
    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
