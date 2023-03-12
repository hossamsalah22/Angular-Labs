import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { ListDepartmentComponent } from './department/list-department/list-department.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentAddComponent,
    StudentUpdateComponent,
    StudentDetailsComponent,
    AddDepartmentComponent,
    ListDepartmentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
