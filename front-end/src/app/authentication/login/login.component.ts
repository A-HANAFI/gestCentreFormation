import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : string = '';
  password : string = '';

  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService: LoginService,
    ) {

  }
  ngOnInit() {
   // this.onLogin();
  }

  onLogin(){
    this.loginService.onLogin(this.username,this.password).subscribe(
      (response) => {
        this.router.navigate(['home']);
        console.log(this.username+' '+this.password);
        console.log(response.token);
      }
    );
    
  }

}
