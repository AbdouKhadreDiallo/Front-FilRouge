import { groupeCompetence } from "./groupeCompetence.models";

export class Referentiel {
    id?:number;
    libelle: string;
    presentation!: string;
    groupeCompetence!: groupeCompetence;
    critereEvaluation: string;
    critereAdmission: string;
    programme?: string;
    isDeleted?: boolean;
	htmlDATA: any;

}