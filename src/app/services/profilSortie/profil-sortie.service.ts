import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
import { UsersServicesService } from '../users-services.service';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  constructor(private loginService: LoginService, private http: HttpClient,private userService: UsersServicesService) { }
  
  getProfilSorties(){
    return this.http.get(`${this.loginService.baseUrl}/admin/profils_de_sorties`, this.loginService.httpOptions);
  }
  add(data): Observable<any> {
    return this.http.post<any>(`${this.loginService.baseUrl}/admin/profils`, JSON.stringify(data), this.userService.httpOptions);
  }
}
