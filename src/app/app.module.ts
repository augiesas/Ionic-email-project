import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { InboxComponent } from './inbox/inbox.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { CreateemailComponent } from './createemail/createemail.component';
import { SentComponent } from './sent/sent.component';
import { SpamComponent } from './spam/spam.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DetailemailComponent } from './detailemail/detailemail.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage-angular';
import { UserService } from './user.service';
import { EmailService } from './email.service';
import { DetailspamComponent } from './detailspam/detailspam.component';
import { DetailfavoriteComponent } from './detailfavorite/detailfavorite.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const appRoutes: Routes = [
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'detailemail/:id', component: DetailemailComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'spam', component: SpamComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'createemail/:id', component: CreateemailComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sent', component: SentComponent },
  { path: '', component: InboxComponent },
  { path: 'detailfavorite/:idfav', component: DetailfavoriteComponent },
  { path: 'detailspam/:idspam', component: DetailspamComponent },
  { path: 'changepassword/:idemail', component: ChangepasswordComponent }
];

@NgModule({
  declarations: [AppComponent,
    CreateemailComponent,
    DetailemailComponent,
    FavoriteComponent,
    InboxComponent,
    MyprofileComponent,
    RegisterComponent,
    SentComponent,
    SpamComponent,
    DetailfavoriteComponent,
    DetailspamComponent,
    ChangepasswordComponent],
  entryComponents: [],
  imports: [IonicStorageModule.forRoot(), HttpClientModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule,
  RouterModule.forRoot(appRoutes)],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, EmailService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
