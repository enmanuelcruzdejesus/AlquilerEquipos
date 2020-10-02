import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlquilerEquipos';

  constructor(private service: UserService, private router: Router){
    
  }

  showNav(): boolean {

    // if(this.getCurrentUrl() ==='/login' || this.getCurrentUrl() === '/register')
    // return false;

    // return true;

    return this.service.loggedIn();

  }

  getCurrentUrl(): string{
    return this.router.url;
  }
  
  userLoggedIn(): boolean{
    return this.service.loggedIn();    
  }


  ngOnInit(){

     
  }
  Logout(){
    this.service.logoutUser();
    this.router.navigate(['/login']);
      
  }

}
