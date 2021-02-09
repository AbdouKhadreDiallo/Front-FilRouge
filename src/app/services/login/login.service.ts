import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoginService {
	islog = new BehaviorSubject<boolean>(this.isToken());

	public baseUrl = 'http://127.0.0.1:8000/api';
	public localStorage = window.localStorage;

	constructor(private http: HttpClient, private router: Router) { }

	// login function
	login(login: string, pass: string): any {
		const credentials =
		{
			username: login,
			password: pass
		};
		//console.log(credentials);
		return this.http.post(`${this.baseUrl}/login`, credentials);
	}

	httpOptions = {
		headers: new HttpHeaders({
			Authorization: 'Bearer ' + this.getBrutToken()
		}),
	};

	public getToken(login: string, pass: string): void {
		this.login(login, pass).subscribe(
			(token: { token: string; }) => {
				localStorage.setItem('token', token.token);
				this.islog.next(true);
				//console.log(localStorage.getItem('token'));

			},
			(httpError: { error: { message: any; }; }) => console.log(httpError.error.message)
		);
	}

	getBrutToken() {
		return this.localStorage.getItem('token');
	}
	
	decodeToken() {
		return this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token') || '{}') : null;

	}

	redirectByRole(role: string) {

		//console.log(role);

		switch (role) {
			case 'ROLE_ADMIN': {
				//localStorage.clear() ;
				this.router.navigate(['accueil']);
				break;
			}
			case 'ROLE_FORMATEUR': {
				this.router.navigate(['formateur']);
				break;
			}
			case 'ROLE_APPRENANT': {
				this.router.navigate(['apprenant']);
				break;
			}
			default: {
				this.router.navigate(['']);
				break;
			}
		}
	}

	logout() {
		if (confirm('Voulez-vous vous deconnectez ?')) {
			let removeToken = localStorage.removeItem('token');
			if (removeToken == null) {
				this.router.navigate(['login']);
			}
		}

	}

	isToken(): boolean{
		if (localStorage.getItem('token')) {
		  return true;
		}
		return false ;
	  }

	// function for auth guard
	get isLoggedIn(): boolean {
		let authToken = localStorage.getItem('token');
		//this.islog.next(false);
		return (authToken !== null) ? true : false;
	}

}
