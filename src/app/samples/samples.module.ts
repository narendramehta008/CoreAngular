import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplesRoutingModule } from './samples-routing.module';
import { SamplesComponent } from './samples.component';
import { HttpClientModule } from '@angular/common/http';
import { BtspModule } from '../btsp/btsp.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ResizableModule } from '../resizable/resizable.module';

@NgModule({
  declarations: [SamplesComponent, CardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SamplesRoutingModule,
    HttpClientModule,
    BtspModule,
    RouterModule,
    ResizableModule,
  ],
})
export class SamplesModule {}
