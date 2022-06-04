import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-spam',
  templateUrl: './spam.component.html',
  styleUrls: ['./spam.component.scss'],
})
export class SpamComponent implements OnInit {
  pengirim:string = "Pengirim: ";
  subject:string = "Subject: ";
  message:string = "Message";
  userlogin:string = '';
  isSpam: string = "spam";

  spam_emails = [];

  constructor(public es: EmailService, public st: Storage) { }

  async ngOnInit() {
    this.userlogin = await this.st.get('user_id');
    this.listFavEmail();
  }

  listFavEmail(){
    this.es.emailList(this.userlogin, this.isSpam).subscribe((data)=>{
      this.spam_emails = data;
    })
  }

  removeSpam(id) {
    this.es
      .updateEmail('', id, this.userlogin)
      .subscribe((data) => {
        if(data['result'] == "OK"){
          alert("Email success to remove form spam");
          this.ngOnInit();
        }
      });
  }

}
