import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { NotFoundScreenComponent } from './not-found-screen/not-found-screen.component';
import { SectionScreenComponent } from './section-screen/section-screen.component';

const routes: Routes = [
  {path: '', component: MainScreenComponent},
  {path: 'section/:id', component: SectionScreenComponent},
  {path: '**', component: NotFoundScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
