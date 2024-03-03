import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  show = true;
  username="Hooks Concept";

  constructor(){
    console.log("constructor");
    
  }
  ngOnChanges(changes: SimpleChanges){
      console.log("Changes Detected");
      
  }
  ngOnDestroy() {
      console.log("Bye Destroy"); 
  }
  ngOnInit() {
    console.log("Hello ngOnInit");
    
  }

  toggle(){
      this.show= !this.show
  }

}
