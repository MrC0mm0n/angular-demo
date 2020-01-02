import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'site-a', loadChildren: () => import('./site-a/site-a.module').then(mod => mod.SiteAModule) },
  { path: 'site-b', loadChildren: () => import('./site-b/site-b.module').then(mod => mod.SiteBModule) },
  { path: 'site-c', loadChildren: () => import('./site-c/site-c.module').then(mod => mod.SiteCModule) },
  { path: 'site-d', loadChildren: () => import('./site-d/site-d.module').then(mod => mod.SiteDModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
