import { Injectable } from '@angular/core';
import { Calc } from "./infra/calc"

@Injectable({
  providedIn: 'root'
})
export class ExemploreadonlyService {
  readonlyTuple: readonly [number, number] = [10, 5];

  constructor() { }

  somar() {
    let c = new Calc();
    console.log(c.somaComTuplas(this.readonlyTuple))
  }
}
