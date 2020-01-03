import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteBRoutingModule } from './site-b-routing.module';
import { SiteBComponent } from './site-b.component';


@NgModule({
  declarations: [SiteBComponent],
  imports: [
    CommonModule,
    SiteBRoutingModule
  ]
})
export class SiteBModule { }
