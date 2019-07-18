import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  login() {
    this.http
      .get('https://deliveryorder-b9b84.firebaseapp.com/api/v1/time/taipei')
      .subscribe(data => {
        console.log(data);
      })
  }

}
