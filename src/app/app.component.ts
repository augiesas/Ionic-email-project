import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  username = 'Omail';
  judul = 'Omail Apps';
  user_id = "";
  username_user = "";
  login_user = "";
  login_passwd = "";
  login_error = "";
  isRegister = false;
  parusername: string = "";
  paremail: string = "";
  parpass: string = "";
  parrepass: string = "";
  showPassword: boolean = false;
  showRePassword: boolean = false;
  showLoginPassword: boolean = false;

  Register() {
    this.isRegister = true;
  }

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
            this.ngOnInit();
            this.isRegister = false;
          } else {
            alert(data['message']);
          }
        }
      );
  }


  login() {
    this.us.checklogin(this.login_user, this.login_passwd).subscribe(
      (data) => {

        if (data.result == "OK") {
          this.user_id = this.login_user;
          this.storage.set('user_id', this.user_id);
          // console.log(data["data"][0].username);
          this.storage.set('username_user', data["data"][0].username);
        } else {
          this.login_error = "username or password is Wrong!!";
        }
      }
    );
  }

  logout() {
    this.user_id = "";
    this.login_user = "";
    this.login_passwd = "";
    this.login_error = "";
    this.removeItemValue(this.user_id);
    this.removeItemValue(this.username_user);
  }
  showHide() {
    this.showPassword = !this.showPassword;
  }
  showHide2() {
    this.showRePassword = !this.showRePassword;
  }
  showHideLogin() {
    this.showLoginPassword = !this.showLoginPassword;
  }
  constructor(private storage: Storage, public us: UserService) { }

  async ngOnInit() {
    await this.storage.create();
    this.user_id = await this.storage.get('user_id');
  }

  async removeItemValue(key) {
    try {
      await this.storage.remove('user_id');
      return true;
    }
    catch (exception) {
      return false;
    }
  }


}
