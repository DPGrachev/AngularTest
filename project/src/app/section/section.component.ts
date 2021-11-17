import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() id: number = 0;
  @Input() title: string = '';
  @Input() content: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.router.navigate([`/section/${this.id}`]);
  }

}
