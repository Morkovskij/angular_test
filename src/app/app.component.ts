import {Component, OnInit} from '@angular/core';
import {TeacherService} from "./teacher.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TeacherService]
})
export class AppComponent implements OnInit {
  title = "GRSU schedule";
  teachers: any[];
  TeacherSchedule: any[];

  constructor(private _teachersevice: TeacherService) {
  }

  search(term: string): void {
    console.log('search...' + term);
  }


  getTeachers(): void {
    this._teachersevice.getTeachers()
      .subscribe(
        teachers => {
          return this.teachers = teachers.items;// забираем исключительно массив объектов;
        }
      )
  }

  getTeacherschedule(teacher_id) {
    this._teachersevice.getTeacherschedule(teacher_id)
      .subscribe(
        Teacherschedule => {
          return this.TeacherSchedule = Teacherschedule.days;// забирая массив объектов мы можем работать через *ngFor;
        }
      );
    console.log("bump!");
  }


  ngOnInit(): void {
    this.getTeachers();
  }
}
