import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

interface Scripts {
	name: string;
	src: string;
  }
  export const ScriptStore: Scripts[] = [
	{ name: 'pdfMake', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/pdfmake.min.js' },
	{ name: 'vfsFonts', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.59/vfs_fonts.js' }
  ];
@Injectable({
	providedIn: 'root'
})
export class SharedServicesService {

	public baseUrl = 'http://127.0.0.1:8000/api';
	private scripts: any = {};
	constructor(private http: HttpClient, private loginService: LoginService) { }
	httpOptions = {
		headers: new HttpHeaders({
			'Authorization': 'Bearer ' + this.loginService.getBrutToken(),
		})
	};

	getAll(suffix) {
		return this.http.get(`${this.baseUrl}${suffix}`, this.httpOptions);
	}

	add(suffix, data): Observable<any> {
		return this.http.post<any>(`${this.baseUrl}${suffix}`, data, this.httpOptions);
	}
	update(suffix, id: number, data: any): Observable<any> {
		return this.http.put<any>(`${this.baseUrl}${suffix}/${id}`, data, this.httpOptions)
	}
	updateFormData(suffix, id: number, data: any): Observable<any> {
		return this.http.post<any>(`${this.baseUrl}${suffix}/${id}`, data, this.httpOptions)
	}
	get(id: number, suffix): Observable<any> {
		return this.http.get(`${this.baseUrl}${suffix}/${id}`, this.httpOptions);
	}
	delete(suffix, id: number) {
		return this.http.delete(`${this.baseUrl}${suffix}/${id}`, this.httpOptions);
	}
	load(...scripts: string[]) {
		const promises: any[] = [];
		scripts.forEach((script) => promises.push(this.loadScript(script)));
		return Promise.all(promises);
	  }
	  loadScript(name: string) {
		return new Promise((resolve, reject) => {
		  // resolve if already loaded
		  if (this.scripts[name].loaded) {
			resolve({ script: name, loaded: true, status: 'Already Loaded' });
		  } else {
			// load script
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = this.scripts[name].src;
			script.onload = () => {
			  this.scripts[name].loaded = true;
			  console.log(`${name} Loaded.`);
			  resolve({ script: name, loaded: true, status: 'Loaded' });
			};
			script.onerror = (error: any) => resolve({ script: name, loaded: false, status: 'Loaded' });
			document.getElementsByTagName('head')[0].appendChild(script);
		  }
		});
	  }
}
