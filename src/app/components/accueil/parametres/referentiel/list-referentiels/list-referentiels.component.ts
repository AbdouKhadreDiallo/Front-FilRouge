import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Referentiel } from 'src/app/models/referentiel.model';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { groupeCompetence } from 'src/app/models/groupeCompetence.models';
import { Apprenant } from 'src/app/models/apprenant.model';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
	selector: 'app-list-referentiels',
	templateUrl: './list-referentiels.component.html',
	styleUrls: ['./list-referentiels.component.scss']
})
export class ListReferentielsComponent implements OnInit {
	@ViewChild('htmlData', { static: false }) htmlData: ElementRef;
	referentiels: Referentiel[];
	resume = new Referentiel();
	libelle: any;

	constructor(private shared: SharedServicesService) { }

	ngOnInit(): void {
		this.shared.getAll('/referentiels').subscribe(
			res => {
				this.referentiels = res['hydra:member'];
				console.log(this.referentiels);
				this.referentiels.forEach(element => {
					console.log(element.programme);
					
				});

			}
		)
	}
	generatePdf(id) {
		this.shared.get(+id, '/referentiels').subscribe(
			data => {
				this.resume = data;
				console.log(this.resume.libelle);
				const documentDefinition = {
					content: [
						{
							text: 'Referentiel',
							bold: true,
							fontSize: 20,
							alignment: 'center',
							margin: [0, 0, 0, 20]
						},
						{
							columns: [
								[{
									text: this.resume.libelle,
									style: 'name'
								},
								{
									text: 'Presentation : ' + this.resume.presentation
								},
								{
									text: 'Critere d\'admission : ' + this.resume.critereAdmission,
								},
								{
									text: 'Critere d\'évaluation : ' + this.resume.critereEvaluation,
									style:'something'
								},
								{
									text: 'Groupe de Competences',
									style: 'header'
								},
								this.getCompetences(this.resume.groupeCompetence),
								],
							]
						}],
					styles: {
						header: {
							fontSize: 18,
							bold: true,
							margin: [0, 20, 0, 10],
							decoration: 'underline'
						  },
						name: {
							fontSize: 16,
							bold: true,
							margin: [0,0, 0,10]
						}, competTitle: {
							fontSize: 14,
							bold: true,
							italics: true
						},
						something : {
							margin: [0,0, 0,10]
						}
					}
				};
				pdfMake.createPdf(documentDefinition).download();
			}
		)
	}
	getCompetences(competences: groupeCompetence[]) {
		const compet = [];
		competences.forEach(competence => {
			compet.push(
				[
					{
						columns: [
							[
								{
									text: competence.libelle,
									style: 'competTitle'
								}
							]
						]
					}
				]
			)
		});
		return {
			table: {
				widths: ['*'],
				body: [
					...compet
				]
			}
		};
	}
	
}
