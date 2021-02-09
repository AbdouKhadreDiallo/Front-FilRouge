import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profils } from 'src/app/models/profil.model';
import { LoginService } from 'src/app/services/login/login.service';
import { ProfilsserviceService } from 'src/app/services/profil/profilsservice.service';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

	profils: Profils[] = [];
	registerForm: FormGroup;
	dat: any;
	error = '';
	url: any;
	submitted = false;

	constructor(private http: HttpClient, private loginService: LoginService, private profilService: ProfilsserviceService, private formBuilder: FormBuilder, private userService: UsersServicesService, private router: Router) {
		this.registerForm = this.formBuilder.group({
			profil: this.profils,
			firstname: ['', [Validators.required]],
			email: ['', [
				Validators.required,
				Validators.email,
			]],
			lastname: ['', [Validators.required]],
			avatar: [''],
		});
	}

	ngOnInit(): void {
		this.profilService.getProfils().subscribe(
			data => {
				this.profils = data['hydra:member'];
			},
			err => console.log(err)
		)
	}

	onFileSelect(event: { target: { files: string | any[]; }; }){
		if (event.target.files.length>0) {
			const file = event.target.files[0];
			this.registerForm.get('avatar')?.setValue(file);
		}
	}

	get f() { return this.registerForm.controls; }

	addUser(){
		let attrs = ['firstname','lastname','email'];
		if (this.registerForm.value.avatar) {
			attrs.push('avatar');
		}
		const registerFormData = new FormData();
		this.dat = this.registerForm;
		for (let att of attrs) {
			registerFormData.append(att, this.registerForm.get(att).value);
		}
		console.log(this.registerForm.value.profil);
		this.url = this.registerForm.value.profil.toLowerCase().concat('s');
		this.submitted = true;
		if (this.registerForm.invalid) {
            return;
        }
			this.http.post<any>(`${this.loginService.baseUrl}/${this.url}`, registerFormData, this.loginService.httpOptions).subscribe(
				(response) => {
					alert('yep');
				},
				error => {
					console.log(error);
					Swal.fire({
						icon: 'success',
						text: 'ajout effectué avec succes'
					});
					this.router.navigate(["/accueil"]);
					console.log(error);
				}

			);
	}

	onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }



}
