import {Component} from '@angular/core';
import {Card} from './model/Card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public card: Card = Card.createCard();
  public title = 'BlackJack';
  public info: string;

  public checkValue(): string {
    if (this.card.value === 1 || this.card.value === 11) {
      this.info = 'You have drawn 1 or 11';
    } else {
      this.info = 'You have drawn neither 1 nor 11';
    }
    return this.info;
  }

  public drawCard(): void {
    this.card = Card.createCard();
  }
}
