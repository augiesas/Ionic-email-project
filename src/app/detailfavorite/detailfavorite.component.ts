import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detailfavorite',
  templateUrl: './detailfavorite.component.html',
  styleUrls: ['./detailfavorite.component.scss'],
})
export class DetailfavoriteComponent implements OnInit {
  userlogin:string = '';
  idemail:number = 0;

  emails = [];

  constructor(public es: EmailService, public st: Storage, public route: ActivatedRoute) { }

  async ngOnInit() {
    this.idemail = this.route.snapshot.params['idfav'];
    this.userlogin = await this.st.get('user_id');
    this.detailEmail();
  }

  detailEmail(){
    this.es.detailEmail(this.userlogin, this.idemail).subscribe((data) => {
      this.emails = data;
    });
  }
}
