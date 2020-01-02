import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SiteCRoutingModule } from './site-c-routing.module';



@NgModule({
  declarations: [TopNavComponent],
  imports: [
    CommonModule,
    SiteCRoutingModule
  ]
})
export class SiteCModule { }
