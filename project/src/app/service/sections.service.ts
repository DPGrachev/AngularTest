import { Injectable } from "@angular/core";

export type Section = {
  title: string,
  content: string,
}

@Injectable({providedIn: 'root'})
export class SectionsService {
  public sections: Section[] = [
    {title: 'Первая задача', content: 'Описание первой задачи'},
    {title: 'Вторая задача', content: 'Описание второй задачи'},
    {title: 'Третья задача', content: 'Описание третьей задачи'},
    {title: 'Третья задача', content: 'Описание третьей задачи'},
    {title: 'Третья задача', content: 'Описание третьей задачи'},
  ];

  public addNewSection(section: Section) {
    this.sections.push(section);
  }
}