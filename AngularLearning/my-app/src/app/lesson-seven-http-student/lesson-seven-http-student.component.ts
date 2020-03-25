import { Component, OnInit } from '@angular/core';
import {IStudent} from './student'
import { StudentService } from './lesson-seven-http-student.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lesson-seven-http-student',
  templateUrl: './lesson-seven-http-student.component.html',
  styleUrls: ['./lesson-seven-http-student.component.css']
})
export class LessonSevenHttpStudentComponent implements OnInit {
  pageTitle:string;
  listFilter:string;
  errorMessage:string;
  studentListFromFile:IStudent[];
  studentListFromComponent:IStudent[]=[
    {"id":101,"sName":'Manan'},
    {"id":102,"sName":'Tapan'},
    {"id":103,"sName":'Harsh'},
    {"id":104,"sName":'Manali'}
  ];
  constructor(private studentService:StudentService, private router:Router) { 
    this.pageTitle="Student List";
    this.listFilter='';
  }
  ngOnInit(): void {
    this.studentService.getStudents().subscribe(
      {
        next:students=>this.studentListFromFile=students,
        error:err=>this.errorMessage=err
      }
    ); 
  }
  openL8HttpComponent(){
this.router.navigate(['/L8']);
  }
  
}
