import { Injectable } from '@angular/core';

import { COMPANIES } from './mock-companies';

@Injectable()
export class CompanyService {
    getCompanies() {
        return Promise.resolve(COMPANIES);
    }
}
