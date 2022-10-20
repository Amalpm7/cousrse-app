import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    this.myapi.putData(data).subscribe(
      (respose)=>{

      }
    )
    alert("successfully Added")
    this.course_name=""
    this.description=""
    this.type="",
    this.duration=""

  }

  ngOnInit(): void {
  }

}
