import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'video', loadChildren: 'app/portal/video/video.module#VideoModule' },
  { path: '', redirectTo: 'video', pathMatch: 'full' },
  { path: '**', redirectTo: 'video', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
