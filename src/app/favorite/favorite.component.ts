import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  pengirim:string = "Pengirim: ";
  subject:string = "Subject: ";
  message:string = "Message";
  userlogin:string = '';
  isFav: string = "favorite";

  fav_emails = [];

  constructor(public es: EmailService, public st: Storage) { }

  async ngOnInit() {
    this.userlogin = await this.st.get('user_id');
    this.listFavEmail();
  }

  listFavEmail(){
    this.es.emailList(this.userlogin, this.isFav).subscribe((data)=>{
      this.fav_emails = data;
    })
  }

  removeFavorite(id) {
    this.es
      .updateEmail('', id, this.userlogin)
      .subscribe((data) => {
        if(data['result'] == "OK"){
          alert("This Email success to remove form favorite");
          this.ngOnInit();
        }
      });
  }

}
