import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { SamplesComponent } from './samples.component';

export const routes: Routes = [
  {
    path: '',
    component: SamplesComponent,
    data: {
      depth: 2,
      icon: 'https://i.pinimg.com/736x/63/af/5e/63af5e0a705a886c3bf316ab72264f99.jpg',
    },
  },
  {
    path: 'card',
    component: CardComponent,
    data: {
      title: 'cards',
      depth: 3,
      icon: 'https://i.pinimg.com/736x/39/f5/65/39f565a481a52daaa8965b4207efebeb.jpg',
      text: 'Card template.',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SamplesRoutingModule {}
