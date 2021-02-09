import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
	providedIn: 'root'
})
export class UsersServicesService {
	itemsParam = false;
	itemsUser = false;
	menuclicked = "params";
	urrl = '';
	loc = window.location.href.includes(this.urrl);
	constructor(private loginService: LoginService, private http: HttpClient) { }

	httpOptions = {
		headers: new HttpHeaders({
		  'Authorization': 'Bearer '+ this.loginService.getBrutToken(),
		  'Content-Type':  'application/json',
		})
	  };

	// makeEmail(firstname,lastname):string {
	//   let extension = ['fr', 'com', 'hotmail', 'yahoo', 'edu.sn']
	//     var strValues = firstname+lastname;
	//     var strEmail = "";
	//     var strTmp;
	//     for (var i = 0; i < 7; i++) {
	//         strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
	//         strEmail = strEmail + strTmp;
	//     }
	//     strTmp = "";
	//   strEmail = strEmail + "@";
	//   const random = Math.floor(Math.random() * extension.length);
	//   strEmail = strEmail + extension[random];
	//     strEmail = strEmail + ".com"
	//     return strEmail;
	//   }
	
	getAllUsers(): Observable<any> {
		return this.http.get(`${this.loginService.baseUrl}/admin/users`, this.loginService.httpOptions);
	}
	delete(id: number): Observable<any> {
		return this.http.delete(`${this.loginService.baseUrl}/admin/users/${id}`,this.httpOptions);
	}

	get(id: number): Observable<any> {
		return this.http.get(`${this.loginService.baseUrl}/admin/users/${id}`,this.httpOptions);
	  }

	userClick() {
		this.menuclicked = "user";
		this.urrl = "users_list";
		this.itemsUser = true;
		this.itemsParam = false

	}
	paramClick() {
		this.menuclicked = "params";
		this.urrl = "params";
		this.itemsUser = false;
		this.itemsParam = true
	}
}
