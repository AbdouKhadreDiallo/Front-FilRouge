import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profils } from 'src/app/models/profil.model';
import { Users } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login/login.service';
import { ProfilsserviceService } from 'src/app/services/profil/profilsservice.service';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-edit-user',
	templateUrl: './edit-user.component.html',
	styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
	actualProfil: any;
	cuurentUser: any;
	editform!: FormGroup;
	profils: Profils[] = [];
	user: Users = new Users;
	url: any;
	constructor(private shared: SharedServicesService,private http: HttpClient, private loginService: LoginService, private profilService: ProfilsserviceService, private formBuilder: FormBuilder, private userService: UsersServicesService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.cuurentUser = this.route.snapshot.params['id'];

		this.userService.get(this.cuurentUser).subscribe((data: Users) => {
			this.user = data;
			this.actualProfil = this.user.profil;
		});
		this.editform = this.formBuilder.group({
			profil: this.profils,
			firstname: ['', [Validators.required]],
			email: ['', [
				Validators.required,
				Validators.email,
			]],
			lastname: ['', [Validators.required]],
			avatar: [''],
		});
		this.profilService.getProfils().subscribe(
			data => {
				this.profils = data['hydra:member'];
			},
			err => console.log(err)
		);
	}

	onFileSelect(event: { target: { files: string | any[]; }; }) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.editform.get('avatar')?.setValue(file);
		}
	}

	editUser() {
		console.log(this.editform.value.firstname);
		let attrs = ['firstname', 'lastname', 'email'];
		if (this.editform.value.avatar) {
			attrs.push('avatar');
		}

		//console.log(this.user.profil.libelle);

		this.url = this.user.profil.libelle.toLowerCase().concat('s');
		console.log(this.url);

		const registerFormData = new FormData();
		registerFormData.append('_method', 'PUT');

		for (let att of attrs) {
			registerFormData.append(att, this.editform.get(att).value);
		}
		
		
		this.shared.updateFormData('/'+this.url,this.cuurentUser,registerFormData).subscribe(
			data => {
				console.log(data);
				
			},
			err => {
				console.log(err);
				//return;
				Swal.fire({
					icon: 'success',
					text: 'Modifié avec succes'
				});
				this.router.navigate(["/accueil/users_list"]);
			}
		)
		

	}

}
