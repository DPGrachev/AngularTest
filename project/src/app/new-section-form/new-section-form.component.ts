import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Section, SectionsService } from '../service/sections.service';

@Component({
  selector: 'app-new-section-form',
  templateUrl: './new-section-form.component.html',
  styleUrls: ['./new-section-form.component.css']
})
export class NewSectionFormComponent implements OnInit {

  title: string = '';
  content: string = '';

  @Output() closeNewSectionForm = new EventEmitter<void>();

  constructor(public SectionsService: SectionsService) { }

  ngOnInit(): void {
  }

  onCancelButtonClick (): void {
    this.closeNewSectionForm.emit();
  }

  onSubmit (): void {
    const section: Section = {
      title : this.title,
      content: this.content,
    }
    this.SectionsService.addNewSection(section);
    this.closeNewSectionForm.emit();
  }

}
