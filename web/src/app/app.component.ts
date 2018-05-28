import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User> 
  authenticated: boolean = false;

  title = 'app';
  

  constructor(private as: AuthService, public af: AngularFireAuth){
    this.af.authState.subscribe(
      (auth) =>{
        if(auth != null){
          this.user = af.authState;
          this.authenticated = true;
        }
      }
    )
  }

  ngOnInit(){
    
  }

  login(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.authenticated = true;
    console.log(this.af.auth);
  }

  logout(){
    this.af.auth.signOut();
    this.authenticated = false;
  }

  check(){
    var check : boolean;
    if(firebase.auth().currentUser == null){
      check = false;
    }
    else{
      check = true;
    }
    console.log(firebase.auth().currentUser);
    return check;
  }
}



