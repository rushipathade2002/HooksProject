import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  interval:any;
    constructor(){
      console.log("home Constructor");
      
    }
  ngOnDestroy() {
    console.log("Bye Bye...");
    clearInterval(this.interval);

  }
  
  ngOnInit() {
    var i=0;
    this.interval=setInterval(()=>{
      console.log(i);
      i++;
    }, 1000);
    console.log("Home Component NgOnInit");
    
  }
}
