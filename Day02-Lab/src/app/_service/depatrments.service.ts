import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepatrmentsService {

  private departments:Department[]=[
    new Department(1,"OS","Open Source"),
    new Department(2,"PD", ".Net Track")
  ];
  getAll(){
    return this.departments
  }
  add(departments:Department){
    this.departments.push(new Department(departments.id,departments.name, departments.description));
  }
  getDepartmentById(id:number):Department|null
  {
    for (let i = 0; i < this.departments.length; i++) {
      if(this.departments[i].id==id)
      return this.departments[i];
    }
    return null;
  }

  constructor() { }
}
