import { Component, OnInit,ViewChild,AfterViewInit} from '@angular/core';

import {HttpService} from '../services/http-service/http.service';
import {RatingComponent} from '../rating/rating.component';
import endpoint from '../constants/end-pointurls';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-plp-component',
  templateUrl: './plp-component.component.html',
  styleUrls: ['./plp-component.component.less']
})
export class PlpComponentComponent implements OnInit,AfterViewInit{

  constructor(public httpService:HttpService) { 
  }
  key='';
  value='';
  requiredKey='';
  requiredValue='';
  productsList:any=[];
  selected=0;
  hovered=0;
  readonly=false;
  @ViewChild(RatingComponent) rating;

  ngAfterViewInit(){
    console.log('rating obj-->',this.rating);
    this.rating.onChangeOfBlah();
    console.log('rating obj-->',this.rating);
  }
  getFeedBack(feedBack){
    console.log(feedBack);
  }

  addKey(){
    this.httpService.addKey(this.key,this.value);
    console.log('data-->',this.httpService['data']);
    this.getRequest();
    
  }
  getRequest(){
    this.httpService.getRequest(endpoint['getUser']['replace']('$userId','1'))
        .subscribe((data)=>{
            console.log(data);
        })
  }
  getValue(){
    console.log('value-->',this.httpService.getValue(this.requiredKey));
    this.requiredValue=this.httpService.getValue(this.requiredKey);
  }
  getProductsList(){
        this.httpService.getRequest(endpoint['productsList']).subscribe((data)=>{
            this.productsList=data;
            console.log(this.productsList);
        })
  }

  ngOnInit() {
    this.getProductsList();
  }

}
