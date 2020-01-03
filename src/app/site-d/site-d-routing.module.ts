import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteDComponent } from './site-d.component';

const routes: Routes = [{ path: '', component: SiteDComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteDRoutingModule { }
