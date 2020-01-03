import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'site-a', loadChildren: () => import('./site-a/site-a.module').then(m => m.SiteAModule) }, 
  { path: 'site-b', loadChildren: () => import('./site-b/site-b.module').then(m => m.SiteBModule) }, 
  { path: 'site-c', loadChildren: () => import('./site-c/site-c.module').then(m => m.SiteCModule) }, 
  { path: 'site-d', loadChildren: () => import('./site-d/site-d.module').then(m => m.SiteDModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
