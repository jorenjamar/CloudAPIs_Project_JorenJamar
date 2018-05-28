import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFireAuth) { }

  ngOnInit() {
  }

  login(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log(this.af.auth);
  }

}
