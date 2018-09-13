import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  currentdate = new Date(); 
  datetime =  + this.currentdate.getDate() + "/"
              + (this.currentdate.getMonth()+1)  + "/" 
              + this.currentdate.getFullYear() + " " 
              + this.currentdate.getHours() + ":"  
              + this.currentdate.getMinutes() + ":" 
              + this.currentdate.getSeconds() + " GMT+0100 (CET)"; 
             
 

}
