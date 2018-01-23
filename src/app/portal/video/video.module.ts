import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VideoComponent } from './video.component';
import { MaterialModule } from '../../shared/material.module';
import { DataService } from '../../shared/data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    VideoRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [VideoComponent],
  providers: [
    DataService
  ]
})
export class VideoModule { }
