import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { TrainerModel } from './trainer.model';

@Injectable()
export class TrainerService{
    
constructor(private httpService: HttpService){
    
}
   
 editTrainer(data: TrainerModel) {
    let obj = { name: data.trainername, id: data.ID ,mobile: data.mobile, email:data.email,classes:data.subjects.join(',') };
    return this.httpService.post('/api/Trainer/EditTrainer', obj);
}
 addTrainer(data: TrainerModel) {
    let obj = { name: data.trainername,id:0,mobile: data.mobile, email:data.email,classes:data.subjects.join(',') };
    return this.httpService.post('/api/Trainer', obj);
 }
 deleteTrainer(id) {
     return this.httpService.delete('/api/Trainer/' + id);
 }
 getTrainer() {
     return this.httpService.get('/api/Trainer');
 }
}



