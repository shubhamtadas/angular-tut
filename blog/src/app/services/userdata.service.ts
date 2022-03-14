import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'Shubham', age:22, email:'shubham@test.com'},
      {name:'Abhi', age:25, email:'abhi@test.com'},
      {name:'Karan', age:27, email:'karan@test.com'},
    ]
  }
}
