import { Component } from '@angular/core';

//component decorator, locations for files
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

//component logic
export class AppComponent {
  title = 'my-app';
}
