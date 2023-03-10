import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';
import { DepatrmentsService } from 'src/app/_service/depatrments.service';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {
departments:Department[] = [];
ids=0;
constructor(public departmentService:DepatrmentsService){}
  ngOnInit(): void {
    this.departments=this.departmentService.getAll();
  }
}
