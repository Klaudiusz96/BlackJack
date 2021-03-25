import {Injectable} from '@angular/core';
import {Colour} from './Colour.enum';

@Injectable({
  providedIn: 'root'
})
export class Card {     // Dodanie klasy
  // Symbol, Value, Colour
  private value: number;
  private colour: Colour;

  private constructor(value: number, colour: Colour) {
    this.value = value;
    this.colour = colour;
  }

  public static createCard(): Card {
    const value = Math.ceil(Math.random() * 11);
    return new Card(value, Colour.Diamond);
  }

  public getValue(): number {
    return this.value;
  }

  public getColour(): Colour {
    return this.colour;
  }
}
