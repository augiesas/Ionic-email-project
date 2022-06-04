import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss'],
})
export class MyprofileComponent implements OnInit {
 
  disabled_username:boolean = true;
  username:string = "";
  email:string = "";
  constructor(public u:UserService, public st:Storage) { }

  async ngOnInit() {
    this.email = await this.st.get('user_id');
    this.username = await this.st.get('username_user');
  }

  saveprofile(){
    this.u.UpdateUser(this.email, this.username).subscribe(
      (data) => {
        if(data['result'] == "OK"){
          alert(data['message']);
          this.st.set('username_user', this.username);
        } else {
          alert(data['message']);
        }
      });
  }
  editprofile(){
    this.disabled_username = false;
  }

}
