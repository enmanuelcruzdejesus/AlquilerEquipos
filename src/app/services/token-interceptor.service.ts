import { UserService } from './user.service';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {
  constructor(private injector: Injector) { }
  intercept(req,next){
    // let service = this.injector.get(UserService);
    // let tokenizedReq = req.clone({
    //   setHeaders:{
    //     Authorization: `Basic ${service}`
    //   }
    // })
    // return next.handle(tokenizedReq);
  }
}
