import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassModel } from './class.model';
import { ClassService } from './class.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [ClassService]
})
export class ClassComponent implements OnInit {
  @ViewChild("myForm") myForm: NgForm;
  class: ClassModel;
  classList: ClassModel[] = [];
  search='';
  message = '';
  submited = false;
  constructor(private classservice: ClassService, private route: Router) { }
  openModal() {
    this.myForm.resetForm();
    this.myForm.reset();
    this.submited = false;
    this.clear();
    $('#myClassModal').modal('show');
  }
  ngOnInit() {
    this.clear();
    this.onGetClass();
  }

  clear() {
    this.class = { classname: '', ID: null }
  }
  onEdit(data: ClassModel, index: number) {

    this.openModal();
    this.class = { ID: data.ID, classname: data.classname };

  }
  onDelete(ID: number) {
    if (window.confirm('You want to delete the class?')) {
      // this.classList.splice(index, 1);
      this.classservice.deleteClass(ID).then((response:any)=>{
        if (response.hasErrors == false) {
          this.onGetClass();
          $('#myClassModal').modal('hide');
        } else {
          for (let index = 0; index < response.errors.length; index++) {
            this.message = this.message + response.errors[index].errorMessage;
          }

        }
        setTimeout(() => {
          this.message = '';
        }, 5000);
      })
    }
  }
  // onAddNewClass() {
  //   this.classList.push(this.class);
  //   this.clear();
  //   $('#myClassModal').modal('hide');
  // }
// get the class
  onGetClass() {
    this.classservice.getClass().then((response: any) => {
      this.classList = [];
      for (let index = 0; index < response.result.length; index++) {
        const element = response.result[index];
        this.classList.push({ ID: element.id, classname: element.name });

      }
    });
  }
  // add or edit class
  onAddClass(form) {
    if (form.invalid) {
      this.submited = true;
      return;
    }
    else {

      this.submited = false;
      if (this.class.ID == null || this.class.ID == 0) {
        this.classservice.addClass(this.class).then((response: any) => {
          if (response.hasErrors == false) {
            this.onGetClass();
            $('#myClassModal').modal('hide');
          } else {
            for (let index = 0; index < response.errors.length; index++) {
              this.message = this.message + response.errors[index].errorMessage;
            }

          }
          setTimeout(() => {
            this.message = '';
          }, 5000);
        });
      } else {
        this.classservice.editClass(this.class).then((response: any) => {
          if (response.hasErrors == false) {
            this.onGetClass();
            $('#myClassModal').modal('hide');
            this.clear();
          } else {
            for (let index = 0; index < response.errors.length; index++) {
              this.message = this.message + response.errors[index].errorMessage;
            }

          }
          setTimeout(() => {
            this.message = '';
          }, 5000);
        });
      }
    }

  }
}



// export class ClassComponent implements OnInit {
//   class: ClassModel[];
//   classes =  [];
//   saveType = ''
//   classindex = '';
//   // class :any = {classname:''};
//   isEdit = false;
//   classname: any;


//   constructor(private classservice: ClassService, private route: Router) { }
//   openModal() {
//     this.clear();
//     $('myClassModal').modal('show');
//   }

//   ngOnInit() {
//     this.class = [{ classname: 'Java' }, { classname: 'Angular' }, { classname: 'Javascript' }];

//   }
//   clear() {
//     this.class = { classname : '', ID: 'string' }
//   }

//   onEdit(data: { classname: any; }, index: string) {
//     this.saveType = 'Edit';
//     this.classindex = index;
//     // this.class =data.classname;
//     this.clas
//   }

//   onDelete(index: number) {
//     if (window.confirm('You want to delete the class?')) {
//       this.class.splice(index, 1);
//     }
//   }


//   onAddNewClass() {
//     this.saveType = 'Add';
//     let roll = this.classes.length;
//     roll++;
//     this.class.classname = '00' + roll;
//     roll++;
//     this.isEdit = true;

//   }



//   onSave() {
//     if (this.saveType === 'Edit') {
//       this.class[this.classindex].classname = this.class.classname;
//     }

//     else {
//       this.classname.push(this.class);
//     }
//   }
// }
