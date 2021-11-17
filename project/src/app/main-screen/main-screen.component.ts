import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../service/sections.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(public SectionsService: SectionsService) { }

  isEditMode: boolean = false;

  ngOnInit(): void {
  }

  onAddNewSectionClick (): void {
    this.isEditMode = true;
  }

  closeNewSectionForm (): void {
    this.isEditMode = false;
  }

}
