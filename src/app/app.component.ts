import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ResizableModule } from './resizable/resizable.module';
import { SamplesModule } from './samples/samples.module';
import { BtspModule } from './btsp/btsp.module';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ResizableModule,
    SamplesModule,
    BtspModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}
}
