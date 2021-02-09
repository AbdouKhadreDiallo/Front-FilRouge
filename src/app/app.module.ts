import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersComponent } from './components/accueil/users/users.component';
import { UsersSidenavComponent } from './components/accueil/users/users-sidenav/users-sidenav.component';
import { UsersListComponent } from './components/accueil/users/users-list/users-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfilsComponent } from './components/accueil/users/profils/profils.component';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/accueil/users/add-user/add-user.component';
import { DetailUserComponent } from './components/accueil/users/detail-user/detail-user.component';
import { AddProfilComponent } from './components/accueil/users/profils/add-profil/add-profil.component';
import { DetailProfilComponent } from './components/accueil/users/profils/detail-profil/detail-profil.component';
import { EditUserComponent } from './components/accueil/users/edit-user/edit-user.component';
import { EditProfilComponent } from './components/accueil/users/profils/edit-profil/edit-profil.component';
import { ParametresComponent } from './components/accueil/parametres/parametres.component';
import { ListPromoComponent } from './components/accueil/parametres/Promo/list-promo/list-promo.component';
import { AddPromoComponent } from './components/accueil/parametres/Promo/add-promo/add-promo.component';
import { DetailsPromoComponent } from './components/accueil/parametres/Promo/details-promo/details-promo.component';
import { AddGroupeCompetenceComponent } from './components/accueil/parametres/GroupeCompetence/add-groupe-competence/add-groupe-competence.component';
import { ListGroupeCompetenceComponent } from './components/accueil/parametres/GroupeCompetence/list-groupe-competence/list-groupe-competence.component';
import { DetailsGroupeCompetenceComponent } from './components/accueil/parametres/GroupeCompetence/details-groupe-competence/details-groupe-competence.component';
import { DetailsCompetenceComponent } from './components/accueil/parametres/Competence/details-competence/details-competence.component';
import { AddCompetenceComponent } from './components/accueil/parametres/Competence/add-competence/add-competence.component';
import { ListCompetenceComponent } from './components/accueil/parametres/Competence/list-competence/list-competence.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';
import { ListReferentielsComponent } from './components/accueil/parametres/referentiel/list-referentiels/list-referentiels.component';
import { AddReferentielComponent } from './components/accueil/parametres/referentiel/add-referentiel/add-referentiel.component';
import { ListProfilSortieComponent } from './components/accueil/users/profils-sortie/list-profil-sortie/list-profil-sortie.component';
import { AddProfilSortieComponent } from './components/accueil/users/profils-sortie/add-profil-sortie/add-profil-sortie.component';
import { EditProfilSortieComponent } from './components/accueil/users/profils-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { RemovewhitespacesPipe } from './custompipe/removewhitespaces.pipe';
import { ChipAutocompleteModule } from 'chip-autocomplete';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		LoginComponent,
		AccueilComponent,
		PageNotFoundComponent,
		UsersComponent,
		UsersSidenavComponent,
		UsersListComponent,
		ProfilsComponent,
		AddUserComponent,
		DetailUserComponent,
		AddProfilComponent,
		DetailProfilComponent,
		EditUserComponent,
		EditProfilComponent,
		ParametresComponent,
		ListPromoComponent,
		AddPromoComponent,
		DetailsPromoComponent,
		AddGroupeCompetenceComponent,
		ListGroupeCompetenceComponent,
		DetailsGroupeCompetenceComponent,
		DetailsCompetenceComponent,
		AddCompetenceComponent,
		ListCompetenceComponent,
		ListReferentielsComponent,
		AddReferentielComponent,
		ListProfilSortieComponent,
		AddProfilSortieComponent,
		EditProfilSortieComponent,
		RemovewhitespacesPipe,
		
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		NgbModule,
		HttpClientModule,
		NgbPaginationModule,
		NgbAlertModule,
		FormsModule,
		ReactiveFormsModule,
		NgxBootstrapIconsModule.pick(allIcons),
		ChipAutocompleteModule,
		AutocompleteLibModule,
		NgxExtendedPdfViewerModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
