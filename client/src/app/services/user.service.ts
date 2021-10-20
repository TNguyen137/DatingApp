import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

@Injectable()
export class UserService {
    number: number | undefined;
    title = 'The Dating App: ';
    users: any;
    constructor(private _http: HttpClient) {}

    getUsers$(): Observable<any> {
        const apiUrl = 'https://localhost:5001/api/Users';
        return this._http.get<any>(apiUrl).pipe(retry(1), catchError(this.handleError));;
    }

    handleError(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent){
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            errorMessage = `Error Code: ${error.status} Message: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}