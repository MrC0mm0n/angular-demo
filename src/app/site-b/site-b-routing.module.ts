import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteBComponent } from './site-b.component';

const routes: Routes = [{ path: '', component: SiteBComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteBRoutingModule { }
