import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  addUser(userId){
    data['userId']=userId;
  }
  getUser(){
    return data['userId'];
  }
}
let data:object={}
