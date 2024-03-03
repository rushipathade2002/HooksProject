import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  show = true;
  constructor(){
    console.log("constructor");
    
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
