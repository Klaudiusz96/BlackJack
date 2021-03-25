import {Component} from '@angular/core';
import {Card} from './model/Card';
import {Colour} from './model/Colour.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public cards: Card[] = [];
  public title = 'BlackJack';
  public info: string;

  private cardsValueSum = 0;

  // public checkValue(): string {
  //   const cardValue = this.card.getValue();
  //   if (cardValue === 1 || cardValue === 11) {
  //     this.info = 'You have drawn 1 or 11';
  //   } else {
  //     this.info = 'You have drawn neither 1 nor 11';
  //   }
  //   return this.info;
  // }

  public drawCard(): void {
    const card = Card.createCard();
    this.cardsValueSum += card.getValue();
    this.cards.push(card);
  }

  public clearCards(): void {
    this.cards = [];
    this.cardsValueSum = 0;
    this.info = Colour[0];
  }

  public getCardsValueSum(): number {
    return this.cardsValueSum;
  }
}
