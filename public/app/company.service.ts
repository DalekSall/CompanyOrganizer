import { Injectable } from '@angular/core';

import { COMPANIES } from './mock-companies';

@Injectable()
export class CompanyService {
    getCompanies() {
        return Promise.resolve(COMPANIES);
    }
    getCompany(id: number) {
        return Promise.resolve(COMPANIES).then(
            companies => companies.filter(company => company.id === id)[0]
        )
    }
}
