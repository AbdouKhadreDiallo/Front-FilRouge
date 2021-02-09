import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { UsersServicesService } from 'src/app/services/users-services.service';
import Swal from 'sweetalert2'



@Component({
	selector: 'app-users-list',
	templateUrl: './users-list.component.html',
	styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {
	USERS: Users[] = [];
	page = 1;
	pageSize = 5;
	collectionSize: number;
	user: Users[];
	allUsers: Users[];
	constructor(private userService: UsersServicesService) {
		
		this.refreshUsers();
	}

	ngOnInit(): void {
		
	}
	deleteUser(id: number): void {
		this.userService.delete(id).subscribe(
			response => {
				this.refreshUsers();
			},
			error => {
				console.log(error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Something went wrong!'
				})
			});
	}


	refreshUsers() {
		this.userService.getAllUsers().subscribe(
			(data: Users[]) => {
				this.collectionSize = data.length;
				this.user = data['hydra:member'];
				console.log(this.user);

				this.allUsers = this.user;
			},
			err => console.log(err)
		);
	}
}
