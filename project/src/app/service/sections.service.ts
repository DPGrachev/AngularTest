import { Injectable } from "@angular/core";

export type Section = {
  id: number,
  title: string,
  content: string,
}

@Injectable({providedIn: 'root'})
export class SectionsService {
  public sections: Section[] = [
    {id:1 ,title: 'Первая задача', content: 'Описание первой задачи'},
    {id:2 ,title: 'Вторая задача', content: 'Описание второй задачи'},
    {id:3 ,title: 'Третья задача', content: 'Описание третьей задачи'},
  ];

  public addNewSection(section: Section) {
    this.sections.push(section);
  }

  public getSectionForId (id: number) {
    return this.sections.find((section) => section.id === id)
  }
}