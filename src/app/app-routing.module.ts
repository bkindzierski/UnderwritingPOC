import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from '../app/categories/categories.component';

const routes: Routes = ([

  { path: 'Categories', component: CategoriesComponent, pathMatch: 'full' }, 
    //{ path: 'BusinessClassSelection', component: BusinessClassSelectionComponent, pathMatch: 'full'},
    //{ path: 'LineOfBusinessSelection', component: LineOfBusinessSelectionComponent, pathMatch: 'full' },
  { path: '~/', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: '**', redirectTo: 'AppComponent', pathMatch: 'full' },

]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
