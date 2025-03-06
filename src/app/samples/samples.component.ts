import { Component } from '@angular/core';
import { ICardTemplate } from '../btsp/card/card.component';
import { routes } from './samples-routing.module';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrl: './samples.component.scss',
})
export class SamplesComponent {
  dataSource: ICardTemplate[] = [];
  isChildActivated = false;

  constructor(private active: ActivatedRoute) {}
  ngAfterContentChecked(): void {
    this.isChildActivated = this.active.children.length != 0;
  }

  ngOnInit(): void {
    let card = routes.slice(1).map((child) => {
      return {
        title: child.data?.['title'],
        fontClass: 'fg-theme',
        cardClass: 'card-neu',
        media: {
          src: child.data?.['icon'],
        },
        onHoverShowDetails: true,
        redirectUrl: `/samples/${child.path}`,
        redirectName: 'Visit',
        text: child.data?.['text'] ?? child.data?.['title'],
      };
    });

    this.dataSource.push(...card);
  }
}
