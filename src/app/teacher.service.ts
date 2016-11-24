import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()

export class TeacherService {
    constructor(private _http: Http) {
    }

    teacherURL = 'http://api.grsu.by/1.x/app1/getTeacherSchedule';

    getTeachers(): Observable<any> {
        return this._http.get(`http://api.grsu.by/1.x/app1/getTeachers?extended=true`)
            .map((res: Response) => {
                return res.json();
            });
    }

    getTeacherschedule(teacher_id): Observable<any> {
        let params = new URLSearchParams();
        params.set('teacherId', teacher_id);

        return this._http.get(this.teacherURL,{search: params} )
            .map((res: Response) => {
                return res.json();
            });
    }
}