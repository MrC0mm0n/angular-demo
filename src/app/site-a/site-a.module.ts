import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteARoutingModule } from './site-a-routing.module';
import { SiteAComponent } from './site-a.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { ComponentDComponent } from './component-d/component-d.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [SiteAComponent, ComponentAComponent, TopNavComponent, ComponentBComponent, ComponentCComponent, ComponentDComponent],
  imports: [ CommonModule, NgbModule, SiteARoutingModule ]
})
export class SiteAModule { }
