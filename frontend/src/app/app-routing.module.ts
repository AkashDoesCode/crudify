import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'table',
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
