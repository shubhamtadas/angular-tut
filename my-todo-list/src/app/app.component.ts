import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	public items = [];

	/* A two-way binding performed which pushes text on division */
	public newTask:any;


	/* When input is empty, it will not create a new division */
	public addToList() {
		if (this.newTask == '') {
		}
		else {
			this.items.push(this.newTask as never );
			this.newTask = '';
		}
	}
 // function to delete task
	public deleteTask(index:any,) {
		this.items.splice(index, 1);
		console.warn(index);
	}
}
