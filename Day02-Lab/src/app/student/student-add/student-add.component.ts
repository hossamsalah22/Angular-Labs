import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {
  @Output() addClick:EventEmitter<Student> = new EventEmitter();
  addNewStudent:Student = new Student(0,"",27);

  addStudent(){
    this.addClick.emit(this.addNewStudent);
  }
}
