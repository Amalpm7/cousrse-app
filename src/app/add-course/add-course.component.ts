import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor() { }
  course_name=""
  description=""
  type=""
  duration=""
  readvalue=()=>{
    let data={
      "course_name":this.course_name,
      "description":this.description,
      "type":this.type,
      "duration":this.duration
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
