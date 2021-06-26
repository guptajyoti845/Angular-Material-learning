import {Component, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {COURSES} from '../model/db-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // @ts-ignore
  beginnerCourses: Course[];
  // @ts-ignore
  advancedCourses: Course[];

  constructor() {

  }

  ngOnInit(): void {

    const courses: any = Object.values(COURSES);

    this.beginnerCourses = courses.filter((course: Course) => course.category === 'BEGINNER');

    this.advancedCourses = courses.filter((course: Course) => course.category === 'ADVANCED');
  }

}
