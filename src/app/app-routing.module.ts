import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NotFoundComponent} from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  // {path: '**', redirectTo: '404'},
  // {path: '404', component: NotFoundComponent}
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
