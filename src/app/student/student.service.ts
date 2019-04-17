import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { StudentModel } from './student.model';

@Injectable()
export class StudentService{
  
    
constructor(private httpService: HttpService){
    
}
   
 editStudent(data: StudentModel) {
    // let obj = { name: data.trainername, id: data.ID ,mobile: data.mobile, email:data.email,classes:data.subjects.join(',') };
    // return this.httpService.post('/api/Trainer/EditTrainer', obj);
}
 addStudent(data: StudentModel) {
    // let obj = { name: data.trainername,id:0,mobile: data.mobile, email:data.email,classes:data.subjects.join(',') };
    // return this.httpService.post('/api/Trainer', obj);
 }
 deleteStudent(id) {
    //  return this.httpService.delete('/api/Trainer/' + id);
 }
 getStudent() {
    //  return this.httpService.get('/api/Trainer');
 }
}
