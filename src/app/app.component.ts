import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qaplatform';

  constructor(private router: Router){}

  showSidebar(): boolean{
    return (this.router.url !== '/signup' && this.router.url !=='/login' )
  }
}
