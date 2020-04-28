import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data.service';
import { IUser, IUserToken } from './i-user-login';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:IUser={
    "username":'Ali',
    "password":'Ali@123'
  }
  // btrivedi   - password@Welcome20
  constructor(private userDataService: UserDataService, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  loginButtonClick(){
    this.userDataService.checkLogin(this.user).subscribe(
      {
        next:data=>this.onLoginSuccess(data),
        error:err=>this.onLoginFailure(err)
      }
    );
  }
  onLoginSuccess(usertoken:IUserToken){
    console.log('Login Successful: ' +  JSON.stringify( usertoken));
    this.authService.userToken=usertoken;
    this.router.navigate(['/adminlist']);
    

  }
  onLoginFailure(err){
    console.log('From Error' + err);
    this.authService.userToken=null;
  }

}
