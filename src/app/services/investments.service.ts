import { Injectable } from '@angular/core';
import { Investment } from '../models/investment.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class InvestmentsService {
    // Set API Headers
    public headers = new HttpHeaders({
        'Content-Type': 'application/json', observe: 'response'
    });
    public options = { headers: this.headers };

    constructor(private http: HttpClient) { }

    /**
     * Get investments from database
     */
    get(): Observable<Investment[]> {
        return this.http.get<Investment[]>(environment.baseUrl + '/investments', this.options)
            .pipe(
                map(res => res),
                catchError(err => Observable.throw(err.message))
            );
    }

    /**
     * Add a new investment to the database
     * @param investment investment data
     */
    post(investment: Investment) {
        this.http.post(environment.baseUrl + '/investments', investment, this.options).subscribe();
    }

    /**
     * Remove a investment from the database
     * @param investmentId investment id
     */
    remove(investmentId: number) {
        this.http.delete(environment.baseUrl + '/investments/' + investmentId).subscribe();
    }
}
