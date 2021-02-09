import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import Swal from 'sweetalert2';

export interface Niveau {
	id?: number;
	critereEvaluation: string;
	groupeAction: string;
}
@Component({
	selector: 'app-add-competence',
	templateUrl: './add-competence.component.html',
	styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {

	groupeCompetences: any;
	addForm: FormGroup;
	tab: any[];
	idcompetence;
	currentCompetence: any;
	niveaux: Niveau[] = [];
	critereEvaluation0: any;
	critereAction0; critereAction1; critereEvaluation1; critereAction2; critereEvaluation2;
	id1; id2; id3;
	libelle;
	constructor(private router: Router,private shared: SharedServicesService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
		
		this.addForm = this.formBuilder.group({
			groupeCompetences: ['', [Validators.required]],
			libelle: ['', [Validators.required]],
			critereAction0: ['', [Validators.required]],
			critereEvaluation0: ['', [Validators.required]],
			critereAction1: ['', [Validators.required]],
			critereEvaluation1: ['', [Validators.required]],
			critereAction2: ['', [Validators.required]],
			critereEvaluation2: ['', [Validators.required]]
		});
	}

	ngOnInit(): void {
		if (this.route.snapshot.params['id']) {
			this.idcompetence = +this.route.snapshot.params['id'];
			this.shared.get(this.idcompetence, '/competences').subscribe(
				data => {
					this.currentCompetence = data;
					this.libelle = this.currentCompetence['libelle'];
					console.log(this.currentCompetence['libelle']);
					for (let index = 0; index < this.currentCompetence['niveaux'].length; index++) {
						this.id1 = this.currentCompetence['niveaux'][0].id;
						this.id2 = this.currentCompetence['niveaux'][1].id;
						this.id3 = this.currentCompetence['niveaux'][2].id;
						
						this.addForm.value.critereEvaluation0 = this.currentCompetence['niveaux'][0].critereEvaluation;
						this.addForm.value.critereAction0 = this.currentCompetence['niveaux'][0].groupeAction;
						this.addForm.value.critereEvaluation1 = this.currentCompetence['niveaux'][0].critereEvaluation;
						this.addForm.value.critereAction1 = this.currentCompetence['niveaux'][0].groupeAction;
						this.addForm.value.critereEvaluation2 = this.currentCompetence['niveaux'][0].critereEvaluation;
						this.addForm.value.critereAction2 = this.currentCompetence['niveaux'][0].groupeAction;


						this.critereEvaluation0 = this.currentCompetence['niveaux'][0].critereEvaluation;
						this.critereAction0 = this.currentCompetence['niveaux'][0].groupeAction;
						this.critereEvaluation1 = this.currentCompetence['niveaux'][1].critereEvaluation;
						this.critereAction1 = this.currentCompetence['niveaux'][1].groupeAction;
						this.critereEvaluation2 = this.currentCompetence['niveaux'][2].critereEvaluation;
						this.critereAction2 = this.currentCompetence['niveaux'][2].groupeAction;
						//break;
					}


				}
			)

		}

		this.shared.getAll('/groupe_competences').subscribe(
			res => {
				this.groupeCompetences = res['hydra:member'];
				console.log(res['hydra:member']);
			}
		)
	}

	clikedNiveau() {

	}


	onSubmit() {
		if (!this.currentCompetence) {

			const competence = {
				libelle: this.addForm.value.libelle,
				groupeCompetences: [{ id: this.addForm.value.groupeCompetences }],
				niveaux: [
					{
						critereEvaluation: this.addForm.value.critereEvaluation0,
						groupeAction: this.addForm.value.critereAction0
					},
					{
						critereEvaluation: this.addForm.value.critereEvaluation1,
						groupeAction: this.addForm.value.critereAction1
					},
					{
						critereEvaluation: this.addForm.value.critereEvaluation2,
						groupeAction: this.addForm.value.critereAction2
					},
				]
			}
			console.log(competence);
			this.shared.add('/competences', competence).subscribe(
				res => {
					console.log(res);
				},
				err => {
					console.log(err);
				}
			)
		}
		else{
			const competence = {
				libelle: this.addForm.value.libelle,
				niveaux: [
					{
						id:this.id1,
						critereEvaluation: this.addForm.value.critereEvaluation0,
						groupeAction: this.addForm.value.critereAction0
					},
					{
						id:this.id2,
						critereEvaluation: this.addForm.value.critereEvaluation1,
						groupeAction: this.addForm.value.critereAction1
					},
					{
						id:this.id3,
						critereEvaluation: this.addForm.value.critereEvaluation1,
						groupeAction: this.addForm.value.critereAction1
					},
				]
			}
			console.log(competence);
			this.shared.update('/competences', this.idcompetence,competence).subscribe(
				result => {
					console.log(result);
					Swal.fire({
						icon: 'success',
						text: 'Modifié avec succes',
					});
					this.router.navigate(["/accueil/competence"]);
				}, 
				err => {
					console.log(err);
					
				}
			)
			
		}



	}

}
