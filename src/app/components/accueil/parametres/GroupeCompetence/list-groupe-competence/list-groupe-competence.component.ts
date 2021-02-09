import { Component, OnInit } from '@angular/core';
import { Competence } from 'src/app/models/competence.models';
import { groupeCompetence } from 'src/app/models/groupeCompetence.models';
import { SharedServicesService } from 'src/app/services/shared-services.service';

@Component({
  selector: 'app-list-groupe-competence',
  templateUrl: './list-groupe-competence.component.html',
  styleUrls: ['./list-groupe-competence.component.scss']
})
export class ListGroupeCompetenceComponent implements OnInit {

  constructor(private shared: SharedServicesService) { }

  groupeCompetences: groupeCompetence[];
  competences: Competence;
  libelle:any;

  ngOnInit(): void {
    this.shared.getAll('/groupe_competences').subscribe(
      (res: {}) =>{
        this.groupeCompetences = res['hydra:member'];
        //console.log(this.groupeCompetences);
        for (const iterator of this.groupeCompetences) {
          this.libelle = iterator.libelle.split(" ").join("");
          console.log(this.libelle);
        }
        
      }
    )
  }

}
