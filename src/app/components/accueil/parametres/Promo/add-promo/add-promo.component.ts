import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import * as _ from 'lodash';
import { Apprenant } from 'src/app/models/apprenant.model';
import { SharedServicesService } from 'src/app/services/shared-services.service';
import * as XLSX from 'xlsx';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

type AOA = any[][];

@Component({
	selector: 'app-add-promo',
	templateUrl: './add-promo.component.html',
	styleUrls: ['./add-promo.component.scss']
})
export class AddPromoComponent implements OnInit {
	keyword = "email";
	listApprenant;
	file: File; arrayBuffer: any; filelist: any;
	apprenant: any;
	data: AOA = [[1, 2], [3, 4]];
	tabApprenant = [];
	addReference: FormGroup;
	referentiel = [];
	products: any;
	etudiant: Apprenant[] = [];
	id: number[];
	actuelid: number;
	apprenantToShow = [];

	constructor(private shared: SharedServicesService, private fb: FormBuilder) {
		this.addReference = this.fb.group({
			langue: ['', [Validators.required]],
			titre: ['', [Validators.required]],
			description: ['', [Validators.required]],
			lieu: ['', [Validators.required]],
			referenceAgate: ['', [Validators.required]],
			fabrique: ['', [Validators.required]],
			dateDebut: ['', [Validators.required]],
			dateFinProvisoire: ['', [Validators.required]],
			referentiel: [null],
			avatar: [''],
			apprenant: [],
			files: ['']
		})
	}

	ngOnInit(): void {

		var current_fs, next_fs, previous_fs; //fieldsets
		var opacity;
		var current = 1;
		var steps = $("fieldset").length;

		setProgressBar(current);

		$(".next").click(function () {

			current_fs = $(this).parent();
			next_fs = $(this).parent().next();

			//Add Class Active
			$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

			//show the next fieldset
			next_fs.show();
			//hide the current fieldset with style
			current_fs.animate({ opacity: 0 }, {
				step: function (now) {
					// for making fielset appear animation
					opacity = 1 - now;

					current_fs.css({
						'display': 'none',
						'position': 'relative'
					});
					next_fs.css({ 'opacity': opacity });
				},
				duration: 500
			});
			setProgressBar(++current);
		});

		$(".previous").click(function () {

			current_fs = $(this).parent();
			previous_fs = $(this).parent().prev();

			//Remove class active
			$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

			//show the previous fieldset
			previous_fs.show();

			//hide the current fieldset with style
			current_fs.animate({ opacity: 0 }, {
				step: function (now) {
					// for making fielset appear animation
					opacity = 1 - now;

					current_fs.css({
						'display': 'none',
						'position': 'relative'
					});
					previous_fs.css({ 'opacity': opacity });
				},
				duration: 500
			});
			setProgressBar(--current);
		});

		function setProgressBar(curStep) {
			var percent: number = parseFloat(100 / steps) * curStep;
			percent = percent.toFixed();
			$(".progress-bar")
				.css("width", percent + "%")
		}

		$(".submit").on('click', function () {
			return false;
		});



		// on recupere les referentiels
		this.shared.getAll('/referentiels').subscribe(
			data => {
				data['hydra:member'].forEach(element => {
					this.referentiel.push(element.libelle);
				});
			}
		)
		console.log(this.referentiel);

		// recup apprenant
		this.shared.getAll('/apprenants').subscribe(
			data => {
				this.listApprenant = data['hydra:member'];

			}
		);

		//this.save()



	}

	// save() {
		
	// }

	onExcellSelect(event) {
		let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'application/vnd.oasis.opendocument.spreadsheet']
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			// console.log(file);

			if (!_.includes(af, file.type)) {
				alert('Only EXCEL Docs Allowed!');
			} else {
				this.addReference.get('files').setValue(file);
			}
		}
	}

	onSkillsSetKeydown(e) {
		this.apprenant = e;
		//console.log(e)
		if (!this.apprenant) return;
		if (!this.tabApprenant.includes(this.apprenant.email)) {
			this.tabApprenant.push(this.apprenant.email);
			this.etudiant.push(this.apprenant.email);
			console.log(this.etudiant);
		}
	}
	onSkillsSetEnter() {
		//console.log(this.groupeComptForm.value.competence);
		this.apprenant = this.addReference.value.apprenant;
		if (!this.tabApprenant.includes(this.apprenant)) {
			this.tabApprenant.push(this.apprenant);
			this.etudiant.push(this.apprenant);
		}
		console.log(this.etudiant);
	}

	onFileChange(evt: any) {
		/* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
			/* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
			const ws: XLSX.WorkSheet = wb.Sheets[wsname];

			/* save data */
			this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
			//console.log(this.data);
			this.data.forEach(element => {
				element.forEach(element => {
					this.etudiant.push(element);
				});

			});
			console.log(this.etudiant);

		};
		reader.readAsBinaryString(target.files[0]);
	}


	dropSkill(index: any) {
		this.referentiel.splice(index, 1);
	}
	onFileSelect(event: { target: { files: string | any[]; }; }) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.addReference.get('avatar')?.setValue(file);
		}
	}

	download() {
		const documentDefinition = {
			content: [
				{
					text: 'ELECTRONIC SHOP',
					fontSize: 16,
					alignment: 'center',
					color: '#047886'
				},
				{
					text: 'Order Details',
					style: 'sectionHeader'
				},
				{ text: 'lightHorizontalLines:', fontSize: 14, bold: true, margin: [0, 20, 0, 8] },
				{
					style: 'tableExample',
					table: {
						headerRows: 1,
						body: [
							[{
								image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png',
								width: 150
							},],
							['Sample value 1'],
							['Sample value 1'],
							['Sample value 1'],
							['Sample value 1'],
							['Sample value 1'],
						]
					},
					layout: 'lightHorizontalLines'
				},
			],
			styles: {
				header: {
					fontSize: 18,
					bold: true,
					margin: [0, 0, 0, 10]
				},
				subheader: {
					fontSize: 16,
					bold: true,
					margin: [0, 10, 0, 5]
				},
				tableExample: {
					margin: [0, 5, 0, 15]
				},
				tableHeader: {
					bold: true,
					fontSize: 13,
					color: 'black'
				}
			},
			defaultStyle: {
				// alignment: 'justify'
			}
		};

		pdfMake.createPdf(documentDefinition).open();
	}

	onSubmit() {
		console.log(this.addReference.value.files);
		//return
		const addPromo = new FormData();
		let attrs = ['langue', 'titre', 'description', 'lieu', 'referenceAgate', 'fabrique', 'dateDebut', 'dateFinProvisoire'];
		if (this.addReference.value.avatar) {
			attrs.push('avatar');
		}
		if (this.addReference.value.files) {
			attrs.push('files');
		}
		for (let att of attrs) {
			addPromo.append(att, this.addReference.get(att).value);
		}

		for (let index = 0; index < this.referentiel.length; index++) {
			addPromo.append('referentiels[]', this.referentiel[index]);
		}

		for (let index = 0; index < this.tabApprenant.length; index++) {
			addPromo.append('apprenants[]', this.tabApprenant[index]);
		}
		// for (var pair of addPromo.entries()) {
		// 	console.log(pair[0]+ ': ' + pair[1]); 
		// }
		//return

		this.shared.add('/admin/promo', addPromo).subscribe(
			data => {

				this.shared.getAll('/admin/promo').subscribe(
					data => {
						data['hydra:member'].forEach(element => {
							//console.log(element.id);
							this.id = element.id;
						});
						this.actuelid = Math.max(+this.id);
						console.log(this.actuelid);
		
						this.shared.getAll('/admin/promo/' + this.actuelid + '/apprenants').subscribe(
							(data: Apprenant[]) => {
								console.log(data);
									const documentDefinition = {
										content: [
											{
												text: 'RESUME',
												bold: true,
												fontSize: 20,
												alignment: 'center',
												margin: [0, 0, 0, 20]
											}
											,
											{
												text: 'Experience',
												style: 'header'
											},
											this.getExperienceObject(data)
										]
									};
									//this.apprenantToShow.push(documentDefinition);
										pdfMake.createPdf(documentDefinition).open();
							}
						)
					}
				);

			},
			err => {
				console.log(err);

			}
		)

	}
	getExperienceObject(experiences: Apprenant[]) {
		const exs = [];
		experiences.forEach(experience => {
			//console.log(experience.firstname);
			
			exs.push(
				[{
					columns: [
						[
							this.getProfilePicObject(experience),
						{
							text: 'Nom:  '+ experience.firstname,
							style: 'jobTitle'
						},
						{
							text: 'Prenom: '+ experience.lastname,
						},
						{
							text: 'email: ' + experience.email,
						},        {
							columns : [
								{ qr: experience.email +' '  + experience.firstname, fit : 100, style: 'qr'},
								
							]
						  }
					]
					],
					styles: {
						qr: {
							margin: [0,0, 0,20]
						}
					}
				}],
				
			);
		});
		return {
			table: {
			  widths: ['auto'],
			  body: [
				...exs,
				
			  ]
			}
		  };
	}

	getProfilePicObject(experience) {
		//console.log('data:image/jpeg;base64,' + experience.avatar);
		if (experience.avatar == "QzpcZmFrZXBhdGhcQ2FwdHVyZSBk4oCZw6ljcmFuIGRlIDIwMjAtMTItMjMgMDgtNDMtMjgucG5n") {
		  return {
			image: 'data:image/jpeg;base64,QzpcZmFrZXBhdGhcQ2FwdHVyZSBk4oCZw6ljcmFuIGRlIDIwMjAtMTItMjMgMDgtNDMtMjgucG5n',
			width: 150,
			height: 150,
			alignment : 'right'
		  };
		}
		return null;
	}
	
	
}
