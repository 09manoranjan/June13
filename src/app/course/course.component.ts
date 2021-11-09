import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }
  course = [
  { 'id':1 , 'name':'Learning Angular' ,'description': 'Lorem Ipsum is simply a dummy Text of the priting and typesetitng industry','image':'../../assets/angular.png'},
  { 'id':2 , 'name':'Learning TypeScript' ,'description': 'Lorem Ipsum is simply a dummy Text of the priting and typesetitng industry','image':'../../assets/typescript.png'},
  { 'id':3 , 'name':'Learning Node' ,'description': 'Lorem Ipsum is simply a dummy Text of the priting and typesetitng industry','image':'../../assets/node.jpg'},
  { 'id':4 , 'name':'Learning React' ,'description': 'Lorem Ipsum is simply a dummy Text of the priting and typesetitng industry','image':'../../assets/reactjs.jpg'},
  ]
  ngOnInit() {
  }

}
