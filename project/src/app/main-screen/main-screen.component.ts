import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../app.component';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  @Input() sections: Section[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
