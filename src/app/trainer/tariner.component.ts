import { Component, OnInit, ViewChild } from '@angular/core';
import { TrainerModel } from './trainer.model';
import { TrainerService } from './trainer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ClassService } from '../class/class.service';
import { ClassModel } from '../class/class.model';
declare var $: any;

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
  providers: [TrainerService, ClassService]

})
export class TrainerComponent implements OnInit {
  @ViewChild("myForm") myForm: NgForm;
  trainer: TrainerModel;
  trainerNames: TrainerModel[] = [];
  submited: boolean = false;
  message: any = '';
  classList: ClassModel[] = [];

  constructor(private trainerservice: TrainerService, private route: Router, private classservice: ClassService) {

  }
  openModal() {
    this.myForm.resetForm();
    this.myForm.reset();
    this.submited = false;
    this.clear();
    $('#myTrainerModal').modal('show');
  }

  ngOnInit() {
    this.clear();
    this.onGetTrainer();
    this.onGetClass();

  }

  clear() {
    this.trainer = { trainername: '', mobile: '', email: '', subjects: '', ID: null };
  }
  onEdit(data: TrainerModel, index: number) {
    this.openModal();
    this.trainer = { trainername: data.trainername, mobile: data.mobile, email: data.email, subjects:data.subjects.split(','), ID: data.ID };
  }
  // getClassIDs(sub) {
  //   let subjects = sub.split(',');
  //   let ids = [];
  //   for (let index = 0; index < subjects.length; index++) {
  //     const element = subjects[index];
  //     ids.push(this.classList.find(x => x.classname == element).ID);
  //   }
  //   return ids;
  // }

  // onDelete(index: number) {
  //   if (window.confirm('You want to delete the class?')) {
  //     this.trainerNames.splice(index, 1);
  //   }
  // }
  onGetTrainer() {
    this.trainerservice.getTrainer().then((response: any) => {
      this.trainerNames = [];
      for (let index = 0; index < response.result.length; index++) {
        const element = response.result[index];
        this.trainerNames.push({ ID: element.id, trainername: element.name, mobile: element.mobile, email: element.email, subjects: element.classes });

      }
    });
  }
  //    onAddTrainer() {
  //     this.trainerNames.push(this.trainer);
  //     this.clear();
  //     $('#myTrainerModal').modal('hide');

  //   }

  onAddTrainer(form) {
    debugger;
    if (form.invalid) {
      this.submited = true;
      return;
    }
    else {

      this.submited = false;
      if (this.trainer.ID == null || this.trainer.ID == 0) {
        this.trainerservice.addTrainer(this.trainer).then((response: any) => {
          if (response.hasErrors == false) {
            this.onGetTrainer();
            $('#myTrainerModal').modal('hide');
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
        this.trainerservice.editTrainer(this.trainer).then((response: any) => {
          if (response.hasErrors == false) {
            this.onGetTrainer();
            $('#myTrainerModal').modal('hide');
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
  onDelete(ID: number) {
    if (window.confirm('You want to delete the class?')) {
      // this.classList.splice(index, 1);
      this.trainerservice.deleteTrainer(ID).then((response: any) => {
        if (response.hasErrors == false) {
          this.onGetTrainer();
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

  onGetClass() {
    this.classservice.getClass().then((response: any) => {
      this.classList = [];
      for (let index = 0; index < response.result.length; index++) {
        const element = response.result[index];
        this.classList.push({ ID: element.id, classname: element.name });

      }
    });
  }
}