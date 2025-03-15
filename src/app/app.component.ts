import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
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
  constructor(@Inject(DOCUMENT) private document: Document) {}
  ngAfterContentChecked(): void {
    console.log(' ngAfterContentChecked');
    this.document.getElementById('nodePath')?.click();
  }

}
