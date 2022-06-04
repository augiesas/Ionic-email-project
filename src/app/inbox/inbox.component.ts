import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
})
export class InboxComponent implements OnInit {
  user_login: string = '';
  paridemail:number = 0;
  favspam = "";

  emails = [];
  listemail() {
    this.es.emailList(this.user_login, '').subscribe((data) => {
      this.emails = data;
    });
  }

  constructor(public es: EmailService, public st: Storage) {}

  async ngOnInit() {
    this.user_login = await this.st.get('user_id');
    this.listemail();
    
  }

  delete(id){
    this.es.deleteEmail(id, this.user_login).subscribe(
      (data) => {
        if(data['result'] == "OK"){
          alert("Sucessfull to delete email");
          this.ngOnInit();
        }else {
          alert("Failed to delete email");
        }
      });
  }
  
  favorite(id) {
    this.es
      .updateEmail('favorite', id, this.user_login)
      .subscribe((data) => {
        if(data['result'] === "OK"){
          alert("This email sucessfully to favorite");
          this.ngOnInit();
        } else {
          alert("This email failed to favorite");
        }
      });
  }
}
