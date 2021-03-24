import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Card {     // Dodanie klasy
  // Symbol, Value, Colour
  public value: number;

  private constructor(value: number) {
    this.value = value;
  }

  public static createCard(): Card {
    const value = Math.ceil(Math.random() * 11);
    return new Card(value);
  }
}
