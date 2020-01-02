import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SiteDRoutingModule } from './site-d-routing.module';



@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    SiteDRoutingModule
  ]
})
export class SiteDModule { }
