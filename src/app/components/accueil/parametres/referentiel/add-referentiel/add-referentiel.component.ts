import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { groupeCompetence } from 'src/app/models/groupeCompetence.models';
import { Referentiel } from 'src/app/models/referentiel.model';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-add-referentiel',
	templateUrl: './add-referentiel.component.html',
	styleUrls: ['./add-referentiel.component.scss']
})
export class AddReferentielComponent implements OnInit {

	keyword = 'libelle';
	addForm: FormGroup;
	GrpCompetences: string[] = ['hep'];
	grpCompetence: any;
	listeLibelle;
	currentReferentiel: any;
	libelle:any;
	presentation:any;
	critereEvaluation:any;
	critereAction:any;
	programme:any;
	GroupeCompetencesInCurrentreferentiel;

	constructor(private shared: SharedServicesService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
		this.addForm = this.fb.group({
			libelle: ['', [Validators.required]],
			presentation: ['', [Validators.required]],
			groupeCompetences: [null],
			critereAdmission: ['', [Validators.required]],
			critereEvaluation: ['', [Validators.required]],
			programme: ['', [Validators.required]]
		});
	 }

	ngOnInit(): void {

		if (this.route.snapshot.params['id']) {
			this.shared.get(+this.route.snapshot.params['id'], '/referentiels').subscribe(
				data => {
					this.currentReferentiel = data;
					this.libelle = this.currentReferentiel.libelle;
					this.presentation = this.currentReferentiel.presentation;
					this.critereAction = this.currentReferentiel.critereAdmission;
					this.critereEvaluation = this.currentReferentiel.critereEvaluation;
					this.GroupeCompetencesInCurrentreferentiel = this.currentReferentiel.groupeCompetence;
					//console.log(this.GroupeCompetencesInCurrentreferentiel);
					this.GroupeCompetencesInCurrentreferentiel.forEach(element => {
						this.GrpCompetences.push(element.libelle);
					});
					
					
				}
			)
		}

		this.shared.getAll('/groupe_competences').subscribe(
			data => {
				this.listeLibelle = data['hydra:member'] as groupeCompetence[];
				console.log(this.listeLibelle);

			}
		)
	}

	onSkillsSetKeydown(e) {
		this.grpCompetence = e;
		//console.log(e)
		if (!this.grpCompetence) return;
		if (!this.GrpCompetences.includes(this.grpCompetence.libelle)) {
			this.GrpCompetences.push(this.grpCompetence.libelle);
			console.log(this.GrpCompetences);
		}
	}

	onFileSelect(event: { target: { files: string | any[]; }; }) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.addForm.get('programme')?.setValue(file);
		}
	}

	dropSkill(index: any) {
		this.GrpCompetences.splice(index, 1);
	}

	onSubmit() {

		let attrs = ['libelle', 'presentation', 'critereAdmission', 'critereEvaluation'];
		if (this.addForm.value.programme) {
			attrs.push('programme');
		}
		const addRef = new FormData();
		for (let att of attrs) {
			addRef.append(att, this.addForm.get(att).value);
		}
		for (let index = 0; index < this.GrpCompetences.length; index++) {
			addRef.append('groupeCompetences[]', this.GrpCompetences[index]);
		}
		
		if (!this.currentReferentiel) {
			this.shared.add('/referentiels', addRef).subscribe(
				data => {
					console.log(data);
				},
				err => {
					console.log(err);
				}
			)
		}
		else{
			
			addRef.append('_method', 'PUT');
			this.shared.updateFormData('/referentiels',+this.route.snapshot.params['id'],addRef).subscribe(
				data => {
					console.log(data);
					
				},
				err => {
					Swal.fire({
						icon: 'success',
						text: 'Modifié avec succes'
					});
					this.router.navigate(["/accueil/referentiel"]);
					
				}
			)
		}
		
		
	}

}
