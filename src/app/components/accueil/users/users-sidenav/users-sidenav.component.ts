import { Component, OnInit } from '@angular/core';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-users-sidenav',
  templateUrl: './users-sidenav.component.html',
  styleUrls: ['./users-sidenav.component.scss']
})
export class UsersSidenavComponent implements OnInit {

  constructor(public userService: UsersServicesService) { }

  ngOnInit(): void {
  }
  
}
