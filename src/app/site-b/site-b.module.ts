import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SiteBRoutingModule } from './site-b-routing.module';



@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    SiteBRoutingModule
  ]
})
export class SiteBModule { }
