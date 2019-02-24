import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'add-user', component: FormComponent },
  { path: 'edit-user/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
