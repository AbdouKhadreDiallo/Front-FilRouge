import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfilSortieService } from 'src/app/services/profilSortie/profil-sortie.service';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import Swal from 'sweetalert2';

interface ProfilSortie {
  id?: number;
  libelle: string;
}

const PROFILSORTIE: ProfilSortie[] = [
  {
    id:1,
    libelle: 'Développeur back'
  },
  {
    id:2,
    libelle: 'Développeur front'
  },
  {
    id:3,
    libelle: 'Développeur fullstack'
  },
  {
    id:4,
    libelle: 'Intégrateur Web'
  },
  {
    id:5,
    libelle: 'Designer Web'
  },
  {
    id:6,
    libelle: 'Référent Digital'
  },
  {
    id:7,
    libelle: 'Community Manager'
  },
  
];

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.scss']
})
export class ListProfilSortieComponent implements OnInit {
  page = 1;
	pageSize = 5;
	collectionSize: number;
	profilSortie: any[];
  allProfilSortie: any[];
  suffix = "/admin/profils_de_sorties";
  addForm: FormGroup;
  id!: number;
  currentProfilSortie: any;
  libelle: any;
  btn = "Enregistrer";

  constructor(private profilSortieService: ProfilSortieService, private shared: SharedServicesService, private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router ) { 
    this.refreshProfil();

    this.addForm = this.formBuilder.group({
			libelle: ['', [Validators.required]]
		});
  }

  ngOnInit(): void {

    if (this.route.snapshot.params['id']) {
			this.route.params.subscribe(
				(p: Params) => {
					this.id = +p['id'];
					this.shared.get(+this.id,this.suffix).subscribe((data: any) => {
						this.currentProfilSortie = data;
						this.libelle = this.currentProfilSortie.libelle;
						this.addForm.value.libelle = this.currentProfilSortie.libelle;
						console.log(this.addForm.value.libelle);
						this.btn = "Modifier";
					});
				}
			);
		}
  }

  refreshProfil() {
		this.shared.getAll(this.suffix).subscribe(
			(data: any[]) => {
				this.collectionSize = data.length;
				this.profilSortie = data['hydra:member'];
				console.log(this.profilSortie);

				this.allProfilSortie = this.profilSortie;
			},
			err => console.log(err)
		);
	}

  onSubmit() {
		if (!this.id) {
			this.shared.add(this.suffix,this.addForm.value).subscribe(
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
			this.shared.update(this.suffix,this.id, this.addForm.value).subscribe(res => {
        console.log('Post updated successfully!');
        this.refreshProfil();
				this.router.navigate(["/accueil/profilSortie"]);
			})
		}
  }
  
  resetForm(){
    this.addForm.reset();
    this.router.navigate(["/accueil/profilSortie"]);
  }
}
