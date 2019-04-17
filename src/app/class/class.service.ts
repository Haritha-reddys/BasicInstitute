import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { ClassModel } from './class.model';

@Injectable()
export class ClassService {

    constructor(private httpService: HttpService) { }

    editClass(data: ClassModel) {
        let obj = { name: data.classname, id: data.ID };
        return this.httpService.post('/api/Class/api/Class/EditClass', obj);
    }
    addClass(data: ClassModel) {
        let obj = { name: data.classname,id:0 };
        return this.httpService.post('/api/Class', obj);
    }
    deleteClass(id) {
        return this.httpService.delete('/api/Class/api/Class/' + id);
    }
    getClass() {
        return this.httpService.get('/api/Class');
    }
}
