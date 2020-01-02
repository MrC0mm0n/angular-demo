import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SiteAModule } from './site-a/site-a.module';
import { SiteBModule } from './site-b/site-b.module';
import { SiteCModule } from './site-c/site-c.module';
import { SiteDModule } from './site-d/site-d.module';

@NgModule({
  declarations: [ AppComponent, TopNavComponent ],
  imports: [ NgbModule, BrowserModule, AppRoutingModule, SiteAModule, SiteBModule, SiteCModule, SiteDModule ],
  providers: [],
  bootstrap: [ AppComponent, TopNavComponent ]
})
export class AppModule { }
