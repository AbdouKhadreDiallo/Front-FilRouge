import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UsersServicesService } from 'src/app/services/users-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemsShow = false;
  menuclicked = "user";

  constructor(private userService: UsersServicesService, public loginService: LoginService) { }

  ngOnInit(): void {
    console.log(this.userClick());
    
  }
  
  userClick(){
    return this.userService.userClick();
    
  }
  paramClick(){
    return this.userService.paramClick();
  }

}
