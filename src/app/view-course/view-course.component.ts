import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor() { }
  viewCourse=
  [
    {"course_name":"BCA","description":"Bachelor of Vomputer Application","type":"Offline","duration":"3Yr"}
  ]

  ngOnInit(): void {
  }

}
