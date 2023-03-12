import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {

@Output() hideClick:EventEmitter<void> = new EventEmitter();

@Input() studentDetails:Student = new Student(0,"",27);

hideDetails()
{
  this.hideClick.emit();
}

}
