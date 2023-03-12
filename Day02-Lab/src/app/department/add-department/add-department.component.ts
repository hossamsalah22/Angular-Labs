import { Component } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepatrmentsService } from 'src/app/_service/depatrments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {

  department:Department = new Department(0,"","");
  constructor(public departmentService:DepatrmentsService){}
    save(){
      this.departmentService.add(this.department);
    }
}

