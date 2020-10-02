import { User } from './../models/user';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  public response  : any = null;

 constructor(private service: UserService, private router: Router) { }

ngOnInit(): void {
}

register() : void{
    
    this.service.registerUser(this.user).subscribe((res)=>{
      if(res != null){
        this.service.setToken(JSON.stringify(res));

   //     this.toastr.Success("Sign Up was completed succesfully");
        this.router.navigate(['/login']);

      }
    
   },(err)=>{
     console.error(err);
   });


  }
}
