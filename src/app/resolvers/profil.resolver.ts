import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Profils } from '../models/profil.model';
import { ProfilsserviceService } from '../services/profil/profilsservice.service';

@Injectable({
	providedIn: 'root'
})

export class ProfilResolver implements Resolve<Profils> {
	constructor(private profilService: ProfilsserviceService) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profils> | Promise<Profils> | Profils {
		return this.profilService.get(+route.params['id']);
	}
}
