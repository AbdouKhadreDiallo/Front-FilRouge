import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Competence } from 'src/app/models/competence.models';
import { groupeCompetence } from 'src/app/models/groupeCompetence.models';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-add-groupe-competence',
	templateUrl: './add-groupe-competence.component.html',
	styleUrls: ['./add-groupe-competence.component.scss']
})
export class AddGroupeCompetenceComponent implements OnInit {

	keyword = 'libelle';
	formGroup: FormGroup;
	competence: any;
	competencesInCurrentGrpCompetence;
	competences: string[] = ["Paramétrer une base de données"];
	isInsert: boolean;
	currentGroupeCompetence: groupeCompetence;
	listeLibelle;
	compet: Competence[] = [];
	libelle; descriptif;


	constructor(private fb: FormBuilder, private shared: SharedServicesService, private router: Router, private route: ActivatedRoute) {
		this.formGroup = this.fb.group({
			libelle: ['', [Validators.required]],
			descriptif: ['', [Validators.required]],
			competences: [null, [Validators.required]]
		});
	}

	ngOnInit(): void {
		if (this.route.snapshot.params['id']) {
			this.shared.get(+this.route.snapshot.params['id'], '/groupe_competences').subscribe(
				data => {
					this.currentGroupeCompetence = data;
					this.libelle = this.currentGroupeCompetence.libelle;
					this.descriptif = this.currentGroupeCompetence.descriptif;
					this.formGroup.value.libelle = this.currentGroupeCompetence.libelle;
					this.formGroup.value.descriptif = this.currentGroupeCompetence.descriptif;
					this.competencesInCurrentGrpCompetence = this.currentGroupeCompetence.competences;
					this.competencesInCurrentGrpCompetence.forEach(element => {
						this.competences.push(element.libelle);
					});

				}
			)
		}
		this.shared.getAll('/competences').subscribe(
			data => {
				this.listeLibelle = data['hydra:member'] as Competence[];
				console.log(this.listeLibelle);

			}
		)


	}
	onSkillsSetKeydown(e) {
		this.competence = e;
		//console.log(e)
		if (!this.competence) return;
		if (!this.competences.includes(this.competence.libelle)) {
			this.competences.push(this.competence.libelle);
			console.log(this.competences);
		}
	}
	onSkillsSetEnter() {
		//console.log(this.groupeComptForm.value.competence);
		this.competence = this.formGroup.value.competences;
		if (!this.competences.includes(this.competence)) {
			this.competences.push(this.competence);

		}
		//   this.groupeComptForm.reset({competence:null,libelle:this.groupeComptForm.value.libelle,description:this.groupeComptForm.value.description});

		console.log(this.competences);


	}

	dropSkill(index: any) {
		this.competences.splice(index, 1);
	}
	selectEvent(item) {
		// do something with selected item
	}

	onChangeSearch(val: string) {
		// fetch remote data from here
		// And reassign the 'data' which is binded to 'data' property.
	}

	onFocused(e) {
		// do something when input is focused
	}

	onSubmit() {

		//console.log(this.compet);
		const groupeCompetence = {
			libelle: this.formGroup.value.libelle,
			descriptif: this.formGroup.value.descriptif,
			competences: this.competences
		}
		console.log(groupeCompetence);
		if (!this.currentGroupeCompetence) {
			this.shared.add('/groupe_competences', groupeCompetence).subscribe(
				data => {
					console.log(data);

				},
				err => {
					//console.log(err);

					Swal.fire({
						icon: 'success',
						text: 'ajout effectué avec succes'
					});
					this.router.navigate(["/accueil/groupeCompetence"]);

				}
			)
		}
		else{
			this.shared.update('/groupe_competences', +this.route.snapshot.params['id'], groupeCompetence).subscribe(
				
				data=>{
					Swal.fire({
						icon: 'success',
						text: 'modifié avec succes'
					});
					this.router.navigate(["/accueil/groupeCompetence"]);
					
				},
				err=>{
					console.log(err);
					
				}
			)
		}

	}
}


