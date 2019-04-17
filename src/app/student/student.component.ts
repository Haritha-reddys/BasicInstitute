import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {StudentService} from './student.service';
import {StudentModel} from './student.model';
import { ProvidersFeature } from '@angular/core/src/render3';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers:[StudentService]
 
})
export class StudentComponent implements OnInit {
student:StudentModel;
studentNames : StudentModel[]=[];
  constructor( private studentservice: StudentService , private router:Router) { }


  openModal(){
    this.clear();

  }
  ngOnInit() {
    this.clear();
    this.onGetStudent();
  }

  clear(){}
  onGetStudent() {
    // this.studentservice.getStudent().then((response: any) => {
    //   this.studentNames = [];
    //   for (let index = 0; index < response.result.length; index++) {
    //     const element = response.result[index];
    //     this.studentNames.push({ ID: element.id,studentname: element.name, mobile: element.mobile, email: element.email, subjects: element.classes, trainername: element.trainernames });

    //   }
    // });
  }

}
