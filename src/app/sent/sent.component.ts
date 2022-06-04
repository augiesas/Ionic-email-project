import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.scss'],
})
export class SentComponent implements OnInit {
  emails = [];
  user_login: string = '';

  constructor(public es: EmailService, public st: Storage) { }

  async ngOnInit() {
    this.user_login = await this.st.get('user_id');
    this.listemail();
  }

  listemail() {
    this.es.sentEmailList(this.user_login).subscribe((data) => {
      this.emails = data;
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
}
