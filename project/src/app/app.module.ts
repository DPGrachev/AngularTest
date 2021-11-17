import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { SectionComponent } from './section/section.component';
import { NewSectionFormComponent } from './new-section-form/new-section-form.component';
import { FormsModule } from '@angular/forms';
import { SectionScreenComponent } from './section-screen/section-screen.component';
import { NotFoundScreenComponent } from './not-found-screen/not-found-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    SectionComponent,
    NewSectionFormComponent,
    SectionScreenComponent,
    NotFoundScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
