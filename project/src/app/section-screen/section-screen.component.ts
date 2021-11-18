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
  id!: number;
  isDeleteMode: boolean = false;
  title! : string;
  content!: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sectionsService: SectionsService,
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    const section = this.sectionsService.getSectionForId(this.id);
    if(!section){
      this.redirectToMainScreen();
    }else{
      this.title = section.title;
      this.content = section.content;
    }
  }

  redirectToMainScreen () {
    this.router.navigate(['/']);
  }

  updateSection() {
    const updatedSection = {
      id: this.id,
      title: this.title,
      content: this.content,
    };
    this.sectionsService.updateSection(updatedSection);
    this.redirectToMainScreen();
  }

  changeFormMode () {
    this.isDeleteMode = !this.isDeleteMode;
  }

  deleteSection () {
    this.sectionsService.deleteSection(this.id);
    this.redirectToMainScreen();
  }

}
