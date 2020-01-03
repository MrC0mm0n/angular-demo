import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteAComponent } from './site-a.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';

const routes: Routes = [
  { path: '', component: SiteAComponent },
  { path: 'component-a', component: ComponentAComponent },
  { path: 'component-b', component: ComponentBComponent },
  { path: 'component-c', component: ComponentCComponent },
  { path: 'component-d', component: ComponentDComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteARoutingModule { }
