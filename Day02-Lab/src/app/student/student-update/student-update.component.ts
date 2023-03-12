import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent {

@Output() updateClick:EventEmitter<Student> = new EventEmitter();
@Input() updateStudentData:Student = new Student(0,"",27);

updateStudent() {
  this.updateClick.emit(this.updateStudentData);
}

}
