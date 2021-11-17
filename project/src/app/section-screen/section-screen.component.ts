import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Section, SectionsService } from '../service/sections.service';

@Component({
  selector: 'app-section-screen',
  templateUrl: './section-screen.component.html',
  styleUrls: ['./section-screen.component.css']
})
export class SectionScreenComponent implements OnInit {
  currentSection! : Section;
  id!: number;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sectionsService: SectionsService,
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const section = this.sectionsService.getSectionForId(this.id);
    if(!section){
      this.router.navigate(['/']);
    }else{
      this.currentSection = section
    }
  }

  onGoBackButtonClick () {
    this.router.navigate(['/']);
  }

}
