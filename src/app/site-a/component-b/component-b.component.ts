import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})

export class ComponentBComponent implements OnInit {

  constructor() { }

  progress = 1;
  ngOnInit() {

    setTimeout(() => {
      console.log(this.progress)
      this.progress = this.progress + 1;
    }, 2000);

  }

}
