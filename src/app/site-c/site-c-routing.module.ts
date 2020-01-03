import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteCComponent } from './site-c.component';

const routes: Routes = [{ path: '', component: SiteCComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteCRoutingModule { }
