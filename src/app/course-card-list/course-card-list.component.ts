import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.scss']
})
export class CourseCardListComponent implements OnInit {

  // @ts-ignore
  @Input() courses: Course[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
