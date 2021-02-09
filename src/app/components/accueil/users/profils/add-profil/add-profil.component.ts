import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { ProfilsserviceService } from 'src/app/services/profil/profilsservice.service';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-add-profil',
	templateUrl: './add-profil.component.html',
	styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {

	addForm: FormGroup;
	currentProfil: any;
	libelle:string = "";

	constructor(private userService: UsersServicesService, private profilService: ProfilsserviceService, private formBuilder: FormBuilder,private route: ActivatedRoute) {
		//this.refreshProfil();
		this.addForm = this.formBuilder.group({
			libelle: ['', [Validators.required]]
		});

	}

	ngOnInit(): void {
		this.route.data.subscribe(
			(data: Data) => {
			  this.libelle = data['profil'];
			}
		  )
		  console.log(this.libelle);
		  
	}
	
	addProfil() {
		this.profilService.add(this.addForm.value).subscribe(
			response => {
				Swal.fire({
					icon: 'success',
					text: 'Ajouté avec succes',
				});
				//this.refreshProfil();
				this.addForm.reset();
			}
		)
	}

	resetData() {
		this.addForm.reset();
	}

}
