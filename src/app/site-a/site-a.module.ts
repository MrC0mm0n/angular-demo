import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SiteARoutingModule } from './site-a-routing.module';

@NgModule({
  declarations: [ TopNavComponent ],
  imports: [
    CommonModule,
    SiteARoutingModule
  ]
})
export class SiteAModule { }
