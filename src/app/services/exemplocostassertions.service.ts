import { Injectable } from '@angular/core';
import { BotMaster } from './infra/botMaster';

@Injectable({
  providedIn: 'root'
})
export class ExemplocostassertionsService {

  constructor() { }

  getBot(): BotMaster[] {
    let bots = [
      { botname: "Renato", numero: 1 },
      { botname: "Renato 123", numero: "123" }
    ];

    return bots;
  }
}
