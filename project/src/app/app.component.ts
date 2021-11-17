import { Component } from '@angular/core';

export type Section = {
  title: string,
  content: string,
  editingMode? : boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sections: Section[] = [
    {title: 'Первая задача', content: 'Описание первой задачи'},
    {title: 'Вторая задача', content: 'Описание второй задачи'},
    {title: 'Третья задача', content: 'Описание третьей задачи'},
  ];
}
