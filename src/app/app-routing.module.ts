import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddCompetenceComponent } from './components/accueil/parametres/Competence/add-competence/add-competence.component';
import { DetailsCompetenceComponent } from './components/accueil/parametres/Competence/details-competence/details-competence.component';
import { ListCompetenceComponent } from './components/accueil/parametres/Competence/list-competence/list-competence.component';
import { AddGroupeCompetenceComponent } from './components/accueil/parametres/GroupeCompetence/add-groupe-competence/add-groupe-competence.component';
import { DetailsGroupeCompetenceComponent } from './components/accueil/parametres/GroupeCompetence/details-groupe-competence/details-groupe-competence.component';
import { ListGroupeCompetenceComponent } from './components/accueil/parametres/GroupeCompetence/list-groupe-competence/list-groupe-competence.component';
import { AddPromoComponent } from './components/accueil/parametres/Promo/add-promo/add-promo.component';
import { DetailsPromoComponent } from './components/accueil/parametres/Promo/details-promo/details-promo.component';
import { ListPromoComponent } from './components/accueil/parametres/Promo/list-promo/list-promo.component';
import { AddReferentielComponent } from './components/accueil/parametres/referentiel/add-referentiel/add-referentiel.component';
import { ListReferentielsComponent } from './components/accueil/parametres/referentiel/list-referentiels/list-referentiels.component';
import { AddUserComponent } from './components/accueil/users/add-user/add-user.component';
import { DetailUserComponent } from './components/accueil/users/detail-user/detail-user.component';
import { EditUserComponent } from './components/accueil/users/edit-user/edit-user.component';
import { AddProfilSortieComponent } from './components/accueil/users/profils-sortie/add-profil-sortie/add-profil-sortie.component';
import { ListProfilSortieComponent } from './components/accueil/users/profils-sortie/list-profil-sortie/list-profil-sortie.component';
import { AddProfilComponent } from './components/accueil/users/profils/add-profil/add-profil.component';
import { DetailProfilComponent } from './components/accueil/users/profils/detail-profil/detail-profil.component';
import { EditProfilComponent } from './components/accueil/users/profils/edit-profil/edit-profil.component';
import { ProfilsComponent } from './components/accueil/users/profils/profils.component';
import { UsersListComponent } from './components/accueil/users/users-list/users-list.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProfilResolver } from './resolvers/profil.resolver';
import { AuthGuard } from './shared/auth.guard';

	const routes: Routes = [
	{path: '',component: LoginComponent  },
	{ path: 'login', component: LoginComponent },
	{
		path: 'accueil', component: AccueilComponent, canActivate: [AuthGuard], children: [
			{ path: '', redirectTo: '/accueil/users_list', pathMatch: 'full' },
			{ path: 'users_list', component: UsersListComponent },
			{ path: 'add_user', component: AddUserComponent },
			{ path: 'user/:id/details', component: DetailUserComponent },
			{ path: 'user/:id/edit', component: EditUserComponent },

			{ path: 'profil_list', component: ProfilsComponent},
			{ path: 'profil/:id/details', component: DetailProfilComponent },
			{ path: 'profil/:id/edit', component: ProfilsComponent} ,

			{ path: 'profilSortie', component: ListProfilSortieComponent },
			{ path: 'profilSortie/add', component: AddProfilSortieComponent },
			{ path: 'profilSortie/:id/edit', component: ListProfilSortieComponent} ,
			
			

			{ path: 'promo', component: AddPromoComponent },
			{ path: 'promo/add', component: AddPromoComponent },
			{ path: 'promo/:id/details-promo', component: DetailsPromoComponent },
			{ path: 'promo/:id/edit', component: ListPromoComponent },

			{ path: 'groupeCompetence', component: ListGroupeCompetenceComponent },
			{ path: 'groupeCompetence/add', component: AddGroupeCompetenceComponent },
			{ path: 'groupeCompetence/:id/details', component: DetailsGroupeCompetenceComponent },
			{ path: 'groupeCompetence/:id/edit', component: AddGroupeCompetenceComponent },

			{ path: 'competence', component: ListCompetenceComponent },
			{ path: 'competence/add', component: AddCompetenceComponent },
			{ path: 'competence/:id/details', component: DetailsCompetenceComponent },
			{ path: 'competence/:id/edit', component: AddCompetenceComponent },

			{ path: 'referentiel', component: ListReferentielsComponent},
			{ path: 'referentiel/add', component: AddReferentielComponent},
			{ path: 'referentiel/:id/edit', component: AddReferentielComponent },
		]
	},

	{ path: 'not-found', component: PageNotFoundComponent },
	{ path: '**', redirectTo: '/not-found' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
