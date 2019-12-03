import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {

    private apiUrl = '../../assets/mocks/employee.json';

    constructor(private httpClient: HttpClient) { }

    getEmployees(): Observable<any[]> {
        return this.httpClient.get<any[]>(this.apiUrl);
    }
}