import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {

  }
  formSubmit(){
    this.router.navigate(['dashboard']);

  }
  onDateSelect(date){
    console.log(date);
  }

}
