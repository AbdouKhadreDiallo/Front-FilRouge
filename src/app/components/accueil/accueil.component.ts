import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';
import * as $ from 'jquery';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private userService: UsersServicesService, private loginService: LoginService) { }

  ngOnInit(): void {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  }
  logout(){
    return this.loginService.logout();
  }

}
