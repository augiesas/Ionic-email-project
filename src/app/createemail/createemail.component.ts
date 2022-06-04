import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createemail',
  templateUrl: './createemail.component.html',
  styleUrls: ['./createemail.component.scss'],
})
export class CreateemailComponent implements OnInit {
  parpengirim: string = '';
  parpenerima: string = '';
  parsubject: string = '';
  parmessage: string = '';
  idemail: string = '';
  emails = [];

  sendEmail() {
    this.es
      .createEmail(
        this.parpengirim,
        this.parpenerima,
        this.parmessage,
        this.parsubject
      )
      .subscribe((data) => {
        if (data['result'] == 'OK') {
          alert(data['message']);
          this.router.navigate(['/inbox']);
        } else {
          alert(data['message']);
        }
      });
  }

  constructor(
    public es: EmailService,
    public storage: Storage,
    public router: Router,
    public route: ActivatedRoute
  ) {  }

  detailEmail(){
    this.es.detailEmail(this.parpengirim, Number(this.idemail)).subscribe(
      (data) => {
      this.emails = data;

      console.log(data);
      console.log("Pengirim: "+ data[0]['pengirim']);
      console.log("idemail: "+data[0]['pengirim']);

      if(this.idemail != '0'){
        // console.log("Penerima: "+this.emails['pengirim']);
        // console.log("subject: "+this.emails['subject']);
        
        this.parpenerima = data[0]['pengirim'];
        this.parsubject = data[0]['subject'];
      }
    });
  }

  setInput(){
    
  }

  async ngOnInit() {
    this.parpengirim = await this.storage.get('user_id');
    this.idemail = this.route.snapshot.params['id'];

    this.detailEmail();
  }
}
