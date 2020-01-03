import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteCRoutingModule } from './site-c-routing.module';
import { SiteCComponent } from './site-c.component';


@NgModule({
  declarations: [SiteCComponent],
  imports: [
    CommonModule,
    SiteCRoutingModule
  ]
})
export class SiteCModule { }
