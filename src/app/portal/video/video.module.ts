import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { MaterialModule } from '../../shared/material.module';
import { DataService } from '../../shared/data.service';


@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    MaterialModule
  ],
  declarations: [VideoComponent],
  providers: [
    DataService
  ]
})
export class VideoModule { }