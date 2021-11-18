import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Section, SectionsService } from '../service/sections.service';

@Component({
  selector: 'app-new-section-form',
  templateUrl: './new-section-form.component.html',
  styleUrls: ['./new-section-form.component.css']
})
export class NewSectionFormComponent implements OnInit {

  insideClick: boolean = true;
  title: string = '';
  content: string = '';

  @Input() id: number = 0;
  @Output() closeNewSectionForm = new EventEmitter<void>();

  constructor(public SectionsService: SectionsService) { }

  ngOnInit(): void {
  }

  onCancelButtonClick (): void {
    this.closeNewSectionForm.emit();
  }

  
  @HostListener('click')
  clicked() {
    this.insideClick = true;
  }

  @HostListener("document:click")
  clickedOut() {
    if(!this.insideClick){
      this.closeNewSectionForm.emit();
    }
    this.insideClick = false;
  }

  onSubmit (): void {
    const section: Section = {
      id: this.id,
      title : this.title,
      content: this.content,
    }
    this.SectionsService.addNewSection(section);
    this.closeNewSectionForm.emit();
  }

}
