import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addeditstudent',
  templateUrl: './addeditstudent.component.html',
  styleUrls: ['./addeditstudent.component.css'],
  providers :[StudentService]
})
export class AddeditstudentComponent implements OnInit {
  message = '';
  trainernames=[];
  classes=[];  
  studentform= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(12)]),
    email: new FormControl('',[Validators.minLength(10),Validators.maxLength(25),Validators.required]),
    mobile : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
    subjects : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
    trainername : new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),

  });

  constructor(private studentservice: StudentService, private router: Router) { }

  ngOnInit() {
    this.clear();
  }


onAddStudent(){

  debugger;
    if (this.studentform.invalid) {
      return;
    }
    else {
      // this.studentservice.addStudent(this.studentform.value).then((respone: any) => {
      //   if (respone.hasErrors == true) {
      //     this.message = respone.errors[0].errorMessage; //for(let i=0;i<errorobj.lrngth;i++{ this.message=this.message+errr[index].error})
      //     setTimeout(() => {
      //       this.message = '';
      //     }, 5000);

      //   }
      //   else {
      //     this.router.navigate(['/student']);
      //   }

      // }).catch(er => {

      // }
      // )
    }
    // alert("successfully logged in");
  
}


onDelete(index: number) {
  if (window.confirm('Are you sure want to delete the student?')) {
    // this.studentform.deleteStudent(ID).then((msg: any) => 
    // console.log(msg)
    // );
  }
}
onEdit(data: { ClassName: any }, index: string) {

  // this.studentservice.editStudent(this.studentform.value).then((respone: any) => {
  //   if (respone.hasErrors == true) {
  //     this.message = respone.errors[0].errorMessage; //for(let i=0;i<errorobj.lrngth;i++{ this.message=this.message+errr[index].error})
  //     setTimeout(() => {
  //       this.message = '';
  //     }, 5000);

  //   }
  //   else {
  //     this.router.navigate(['/student']);
  //   }

  // })

}

clear(){}
}
