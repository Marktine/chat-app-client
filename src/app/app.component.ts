import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
	userId: string = '';
	ngOnInit() {
	}
	isLoggedIn(LoginComponent){
		this.userId = LoginComponent.userID;
		return (this.userId) ? true : false;
	}
}
