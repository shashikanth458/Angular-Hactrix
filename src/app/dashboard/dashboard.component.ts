import { Component, OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import {HttpService} from '../services/http-service/http.service';
import endpoint from '../constants/end-pointurls';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private store:StoreService, public http:HttpService) {
    
   }
  cityList=[];
  maritalList=[];
  employmentType=[];
  
  selectedCity='';
  selectedMaritalStatus='';
  selectedEmploymentType='';
  isPopUpOpen=false;
  userId='';
  loanDetails=[];
  annualIncome:string;
  pancardId:string;

  closeForm(){
    this.isPopUpOpen=false;
  }
  openForm(){
    this.isPopUpOpen=true;
    
  }
  formSubmit(){
  

    // let payLoad={
    //         "userid":2,
    //         "panNo":this.pancardId,
    //         "nationality":"indian",
    //         "maritalStatus":this.selectedMaritalStatus,
    //         "employmentType":this.selectedEmploymentType,
    //         "annaulIncome":parseInt(this.selectedEmploymentType,10),
    //         "loanAmount":12000,
    //         "city":this.selectedCity,
    //         "status":"C",
    //         "loanDuration":"14",
    //         "interestRate": 11.5
    // }
    // this.http.postRequest(endpoint['submitLoan'],payLoad).subscribe((data)=>{
    //   console.log(data);
    // })

    this.http.getRequest(endpoint.getLoanDetails).subscribe((data)=>{
      console.log(data);
      this.loanDetails=data;
      this.closeForm();
    })

  }

  ngOnInit() {
    this.cityList=['city','Hyderabad','Mumbai','Munnar'];
    this.maritalList=['Marital Status','single','married'];
    this.employmentType=['Employment Status','salaried','selfEmployed'];
    
    this.selectedMaritalStatus=this.maritalList[0];
    this.selectedCity=this.cityList[0];
    this.selectedEmploymentType=this.employmentType[0];
    this.userId=this.store.getUser();
    this.formSubmit();
  
  }

}
