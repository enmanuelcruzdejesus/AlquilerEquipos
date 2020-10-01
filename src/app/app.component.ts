import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AlquilerEquipos';


  userLoggedIn(): boolean{
    // return this.service.loggedIn();    
    return true;
  }


  ngOnInit(){

     
  }
  Logout(){
    // this.service.logoutUser();
    // this.router.navigate(['/login']);
    return true;
      
  }

}
