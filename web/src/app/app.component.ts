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

  title = 'app';
  

  constructor(private as: AuthService, public af: AngularFireAuth){
    this.af.authState.subscribe(
      (auth) =>{
        if(auth != null){
          this.user = af.authState;
        }
      }
    )
  }

  ngOnInit(){
    
  }

  logout(){
    this.af.auth.signOut();
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



