import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss'],
})
export class ChangepasswordComponent implements OnInit {
  email: string = "";
  old_pass: string = "";
  new_pass: string = "";
  re_pass: string = "";
  showPassword: boolean = false;
  showPassword2: boolean = false;
  showPassword3: boolean = false;

  constructor(public us: UserService, public storage: Storage) { }

  async ngOnInit() {
    this.email = await this.storage.get('user_id');
  }

  checkpass() {
    if (this.new_pass == this.re_pass) {
      this.savepass();
    } else {
      alert("Please input password correctly");
    }
  }

  savepass() {
    this.us.changePassword(this.email, this.old_pass, this.re_pass).subscribe(
      (data) => {
        if (data['result'] == "OK") {
          alert(data['message']);
        } else {
          alert(data['message']);
        }
      }
    );
  }

  showHide(): void {
    this.showPassword = !this.showPassword;
  }
  showHide2(): void {
    this.showPassword2 = !this.showPassword2;
  }
  showHide3(): void {
    this.showPassword3 = !this.showPassword3;
  }
}
