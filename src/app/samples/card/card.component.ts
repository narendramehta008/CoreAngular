import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ICardTemplate } from '../../btsp/card/card.component';

@Component({
  selector: 'sample-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  constructor(private http: HttpClient) {}
  cards: ICardTemplate[] = [];
  ngOnInit(): void {
    this.http
      .get(
        'https://api.allorigins.win/get?url=' +
          encodeURIComponent(
            'https://timesofindia.indiatimes.com/rssfeedstopstories.cms'
          )
      )
      .subscribe((response: any) => {
        this.parseData(response.contents);
      });
  }

  parseData(text: string) {
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(text, 'text/xml');
    const items = xmlDoc.querySelectorAll('item');
    items.forEach((item) => {
      this.cards.push({
        title: item?.querySelector('title')?.textContent ?? 'title',
        media: {
          src: this.getMedia(item),
          type: 'Image',
          ext: 'jpg',
        },
        redirectUrl: item?.querySelector('link')?.textContent ?? 'link',
        text: item?.querySelector('description')?.textContent ?? 'description',
      });
    });
  }

  getMedia(item: any) {
    let val =
      item?.getElementsByTagName('media:content')?.[0]?.getAttribute('url') ??
      item?.getElementsByTagName('media:thumbnail')?.[0]?.getAttribute('url') ??
      item?.getElementsByTagName('enclosure')?.[0]?.getAttribute('url');
    return val;
  }
}
