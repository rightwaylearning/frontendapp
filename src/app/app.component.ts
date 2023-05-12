import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   firstName:string ;
   lastName:string;
   subjects:string[];
   studentList:any[];

   constructor(){
    this.firstName = "Rohit";
    this.lastName = "Sharma";
    this.subjects = ['Marathi','Hindi','English','Maths','Science','geography'];
    this.studentList = [
                         { fname:'Sudama',lname:'Pohe'},
                         { fname:'Shri krishn',lname:'Yadav'},
                         { fname:'Arjun',lname:'Parth'} 
                        ];
   }


}
