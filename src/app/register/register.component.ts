import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  parusername: string = "";
  paremail: string = "";
  parpass: string = "";
  parrepass: string = "";
  showPassword: boolean = false;
  showRePassword: boolean = false;

  checkregist() {
    if (this.parpass == this.parrepass) {
      this.register();
    } else {
      alert("Please input your data correctly");
    }
  }

  register() {
    this.us.CreateUser(this.paremail,
      this.parusername,
      this.parpass).subscribe(
        (data) => {
          if (data['result'] == "OK") {
            alert("Welcome... Enjoy your communication with Omail :) \nPlease Re-Login");
            this.router.navigate(['/home']);
          } else {
            alert("Sorry your register failed");
          }
        }
      );
  }
  showHide() {
    this.showPassword = !this.showPassword;
  }
  showHide2() {
    this.showRePassword = !this.showRePassword;
  }
  constructor(public us: UserService, public router: Router) { }

  ngOnInit() { }

}
