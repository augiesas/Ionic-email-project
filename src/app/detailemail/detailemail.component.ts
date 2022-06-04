import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailemail',
  templateUrl: './detailemail.component.html',
  styleUrls: ['./detailemail.component.scss'],
})
export class DetailemailComponent implements OnInit {
  
  userlogin:string = '';
  idemail:number = 0;

  emails = [];

  constructor(public es: EmailService, public st: Storage, public route: ActivatedRoute) { }

  async ngOnInit() {
    this.idemail = this.route.snapshot.params['id'];
    this.userlogin = await this.st.get('user_id');
    this.detailEmail();
    console.log(this.emails);
  }

  detailEmail(){
    this.es.detailEmail(this.userlogin, this.idemail).subscribe((data) => {
      this.emails = data;
    });
  }

  spam() {
    this.es
      .updateEmail('spam', this.idemail, this.userlogin)
      .subscribe((data) => {
        if(data['result'] == "OK"){
          alert("This email successfully report as spam");
        } else {
          alert("This email failed report as spam");
        }
      });
  }
}
