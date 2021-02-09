import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { UsersServicesService } from '../users-services.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilsserviceService {

  constructor(private http: HttpClient, private loginService: LoginService, private userService: UsersServicesService) { }

  getProfils(): Observable<any> {
    return this.http.get(`${this.loginService.baseUrl}/admin/profils`,this.loginService.httpOptions);
  }
  get(id: number): Observable<any> {
    return this.http.get(`${this.loginService.baseUrl}/admin/profils/${id}`,this.loginService.httpOptions);
  }
  
  add(data): Observable<any> {
    return this.http.post<any>(`${this.loginService.baseUrl}/admin/profils`, JSON.stringify(data), this.userService.httpOptions);
  }

  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.loginService.baseUrl}/admin/profils/${id}`,JSON.stringify(data),this.userService.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(errorHandler: any): import("rxjs").OperatorFunction<any, any> {
    throw new Error('Method not implemented.');
  }
}
