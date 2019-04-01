import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../services/http-service/http.service';
import { StoreService } from '../services/store.service';
import endPointurls from 'src/app/constants/end-pointurls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,private store:StoreService,public http:HttpService) {
   }
   loanAccountId:string;
   errMsg:string;

  formSubmit(){
    console.log('Im from form submit');
    if(!this.loanAccountId){
      this.errMsg="Please enter Loan Account ID";
      return;
    }
    this.store.addUser(this.loanAccountId);
    this.router.navigate(['dashboard']);
    this.http.getRequest(endPointurls['getUserDetails'].replace('$userId',this.loanAccountId)).subscribe((data)=>{
        console.log(data);
    })
   
  }
  clearErrMsg(){
    this.errMsg='';
  }
  

  ngOnInit() {
  
  }

}
