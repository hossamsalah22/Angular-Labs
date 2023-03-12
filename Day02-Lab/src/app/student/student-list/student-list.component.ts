import { Component } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students : Student [] = [
    new Student(1, "Hossam", 27)
  ]

  detailsFlag = false;
  outputStudentDetails:Student = new Student(0,"",27) ;
  updateFlag = false;
  studentUpdate:Student = new Student(-1,"" ,-1) ;

  addStudent(newStudent:Student)
  {
    this.students.push(new Student(newStudent.id , newStudent.name , newStudent.age));
  }

  showDetails(id:number)
  {
     this.students
     .forEach(student => {
        if (student.id == id)
        {
          this.outputStudentDetails = student ;
          this.detailsFlag = true ;
        }
     });
  }

  toggleHide()
  {
    this.detailsFlag = !this.detailsFlag ;
  }

  deleteStudent(id:number)
  {
  let studentToDelete = new Student(0,"",0) ;
    for (let index = 0; index < this.students.length; index++) {
      if (id == this.students[index].id)
      {
        studentToDelete = this.students[index] ;
      }
    }
    this.students = this.students.filter(function name(student) {
      return student != studentToDelete ;
    }) ;
  }

  updateStudentData(id:number)
  {
    this.updateFlag = true ;
    let studentToUpdate = new Student(0,"",27) ;
    for (let index = 0; index < this.students.length; index++) {
      if (id == this.students[index].id)
      {
        studentToUpdate = this.students[index] ;
      }
    }
    this.studentUpdate = new Student(studentToUpdate.id , studentToUpdate.name , studentToUpdate.age) ;
  }

  updateStudent(student:Student){
    let studentToUpdate = new Student(0,"",27) ;
    for (let index = 0; index < this.students.length; index++) {
      if (student.id == this.students[index].id)
      {
        studentToUpdate = this.students[index] ;
      }
    }
    studentToUpdate.age = student.age;
    studentToUpdate.name= student.name;
    this.updateFlag = false;
  }
}


