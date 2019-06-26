import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemplonamedparametersService {

  constructor() {
    
   }

  saveMatchRolandGarros(
    typeMatch?: number,
    typeLabel?: string,
    round?: number,
    roundLabel?: string,
    courtName?: string,
    durationInMinutes?: number
  ) {
    return console.log(typeMatch, typeLabel, round, roundLabel, courtName, durationInMinutes);
  };

}
