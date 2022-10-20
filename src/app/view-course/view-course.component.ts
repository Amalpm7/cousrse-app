import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  constructor(private myapi:ApiService) { this.putViewCourse()}
  putViewCourse=()=>{
    this.myapi.getData().subscribe(
      (data)=>{
        this.viewCourse=data
      }
    )
  }
  viewCourse:any=[]
  

  ngOnInit(): void {
  }

}
