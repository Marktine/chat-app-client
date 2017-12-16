import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { RouterModule, Router } from '@angular/router';


import { AppComponent } from './app.component';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { AuthGuardService } from './auth-guard.service';


export const firebaseConfig = {
  apiKey: "AIzaSyCzq8AOq-AMibUu_03F1eNL2vw-yyQnB7E",
  authDomain: "chat-app-188112.firebaseapp.com",
  databaseURL: "https://chat-app-188112.firebaseio.com",
  projectId: "chat-app-188112",
  storageBucket: "",
  messagingSenderId: "1049925673543"
}

const appRoutes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: SignupComponent},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
    ),
    AngularFireDatabaseModule
  ],
  providers: [ChatService, SignupService, LoginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
