import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  @Input() username:any
    interval:any;
    constructor(){
      console.log("home Constructor");

    }

  ngOnChanges(changes: SimpleChanges){
    console.log("changes Detected");
    
  }
  ngOnDestroy() {
    console.log("Bye Bye...");
    // clearInterval(this.interval);

  }

  ngOnInit() {
    // var i=0;
    // this.interval=setInterval(()=>{
    //   console.log(i);
    //   i++;
    // }, 1000);
    console.log("Home Component NgOnInit");
    
  }
}
