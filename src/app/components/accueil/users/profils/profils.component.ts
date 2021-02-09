import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Profils } from 'src/app/models/profil.model';
import { ProfilsserviceService } from 'src/app/services/profil/profilsservice.service';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

interface Profil {
	id?: number;
	libelle: string;
}

const PROFIL: Profil[] = [
	{
		id: 1,
		libelle: 'ADMIN'
	},
	{
		id: 2,
		libelle: 'APPRENANT'
	},
	{
		id: 3,
		libelle: 'FORMATEUR'
	},
	{
		id: 4,
		libelle: 'CM'
	},
	{
		id: 5,
		libelle: 'Canada'
	},
	{
		id: 6,
		libelle: 'Vietnam'
	},
	{
		id: 7,
		libelle: 'Brazil'
	},

];

@Component({
	selector: 'app-profils',
	templateUrl: './profils.component.html',
	styleUrls: ['./profils.component.scss']
})
export class ProfilsComponent implements OnInit {

	PROFILS: Profils[] = [];
	page = 1;
	pageSize = 5;
	collectionSize: number;
	profil: Profils[];
	allProfils: Profils[];

	libelle: string = "";
	currentProfil: any;
	btn: string = "Enregistrer";
	// page = 1;
	// pageSize = 4;
	// collectionSize = PROFIL.length;
	// profils: Profil[];
	addForm: FormGroup;
	id!: number;
	constructor(private shared: SharedServicesService, private router: Router, private userService: UsersServicesService, private profilService: ProfilsserviceService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
		this.refreshProfil();


		this.addForm = this.formBuilder.group({
			libelle: ['', [Validators.required]]
		});

		//this.currentProfil= this.route.snapshot.params['id'];
		// this.currentProfil = this.profilService.get(+this.route.snapshot.params['id']).subscribe({})
		// console.log(this.currentProfil);

	}

	ngOnInit(): void {
		if (this.route.snapshot.params['id']) {
			this.route.params.subscribe(
				(p: Params) => {
					this.id = +p['id'];
					this.profilService.get(+this.id).subscribe((data: Profils) => {
						this.currentProfil = data;
						this.libelle = this.currentProfil.libelle;
						this.addForm.value.libelle = this.currentProfil.libelle;
						console.log(this.addForm.value.libelle);
						this.btn = "Modifier";
				 	});
				}
			);
		}



	}

	refreshProfil() {
		this.profilService.getProfils().subscribe(
			(data: Profils[]) => {
				this.collectionSize = data.length;
				this.profil = data['hydra:member'];
				console.log(this.profil);

				this.allProfils = this.profil;
			},
			err => console.log(err)
		);
	}

	onSubmit() {
		if (!this.id) {
			this.profilService.add(this.addForm.value).subscribe(
				response => {
					Swal.fire({
						icon: 'success',
						text: 'Ajouté avec succes',
					});
					this.refreshProfil();
					this.addForm.reset();
				}
			)
		}
		else {
			this.profilService.update(this.id, this.addForm.value).subscribe(res => {
				console.log('Post updated successfully!');
				this.router.navigate(["/accueil/profil_list"]);
			})
		}
	}
	deleteProfil(id: number): void {
		this.shared.delete('/admin/profils',id).subscribe(
			response => {
				this.refreshProfil();
			},
			error => {
				console.log(error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!'
				})
			});
	}

	resetData() {
		//alert('yes');
		this.addForm.reset();
		this.router.navigate(["/accueil/profil_list"]);
	}



}
