import { User } from './../models/user';
import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {


  }


  Login(): void{
    this.service.login(this.user).subscribe((res)=>{
 
        if(res != null){

          this.user = res;

        
          localStorage.setItem('user',JSON.stringify(this.user));
      //    this.toastr.Success("Login was completed succesfully");
      
          this.router.navigate(['/home']);

        }
        else{
          console.log(res);
          console.log("login failed");
        }
          
    })
   }

 
}
