import { Component, Input } from '@angular/core';

@Component({
  selector: 'btsp-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cards: ICardTemplate[] = [];
}

export interface ICardTemplate {
  media?: IMedia;
  title?: string;
  text?: string;
  redirectUrl?: string;
  redirectName?: string;
  showDownload?: boolean;
  onHoverShowDetails?: boolean;
  fontClass?: string;
  cardClass?: string;
}
export interface IMedia {
  src?: string;
  type?: 'Audio' | 'Video' | 'Image';
  ext?: string;
}
