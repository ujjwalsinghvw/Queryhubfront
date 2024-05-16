import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){}

  searchQuery:string='';

  search():void {
    if(this.searchQuery != null)
    this.router.navigate(['/search'], {queryParams: {query : this.searchQuery}});
  }

}
