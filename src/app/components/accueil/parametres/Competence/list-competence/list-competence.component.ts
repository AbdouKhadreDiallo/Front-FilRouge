import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { lockFill } from 'ngx-bootstrap-icons';
import { SharedServicesService } from 'src/app/services/shared-services.service';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.scss']
})
export class ListCompetenceComponent implements OnInit {
  GroupeCompetence: any[] = [];
  competence:any;
  niveau: any;
  niveauClicked:any;
  oneGroupCompetence :any;
  selectedItem: any = [];
  form: FormGroup;
  test :any;
  libelle:any;
  id;
  j;
  
  constructor(private sharedService: SharedServicesService, ) { 
    
  }

  ngOnInit(): void {
    this.sharedService.getAll('/groupe_competences').subscribe(
      (res: {}) =>{
        this.GroupeCompetence = res['hydra:member'];
        console.log(this.GroupeCompetence);
      }
    )
    
  }
  choiceGroupe(){
    console.log(this.id);
    this.sharedService.get(this.id,'/groupe_competences').subscribe(
      res =>{
        this.oneGroupCompetence = res;
        //console.log(this.oneGroupCompetence.competences);
         
      }
    )
  }
  clickedCompetence(id){
    this.sharedService.get(id,'/competences').subscribe(
      res =>{
        this.competence = res;
        this.libelle = this.competence.libelle.split(" ").join("");
        console.log(this.libelle);
        for (const iterator of this.competence.niveaux) {
          this.niveau = iterator;
        }
        console.log(this.niveau.critereEvaluation);
        
      }
    )
  }
  clickedNiveau(id){
    this.sharedService.get(id,'/niveaux').subscribe(
      res =>{
        this.niveauClicked = res;
        
        console.log(this.niveauClicked);
        
      }
    )
  }
  

  // get selectedCountry(){
  //   let countryId = this.countryForm.controls.country.value;
  //   let selected = this.countries.find(c=> c.id == countryId);
  //   return selected;
  // }

}
