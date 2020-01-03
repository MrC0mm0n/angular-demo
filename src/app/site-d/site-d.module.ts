import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteDRoutingModule } from './site-d-routing.module';
import { SiteDComponent } from './site-d.component';


@NgModule({
  declarations: [SiteDComponent],
  imports: [
    CommonModule,
    SiteDRoutingModule
  ]
})
export class SiteDModule { }
