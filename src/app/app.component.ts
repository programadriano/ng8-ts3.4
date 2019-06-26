

import { Component } from '@angular/core';

import { ExemplocostassertionsService } from './services/exemplocostassertions.service';
import { ExemplonamedparametersService } from './services/exemplonamedparameters.service';
import { ExemploreadonlyService } from './services/exemploreadonly.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular8';

  constructor(
    private _exemplonamedparametersService: ExemplonamedparametersService,
    private _exemploreadonlyService: ExemploreadonlyService,
    private _exemplocostassertionsService: ExemplocostassertionsService
  ) {

  }

  convertedNamedParameters() {
    return this._exemplonamedparametersService.saveMatchRolandGarros(3, 'Draws', 1, 'First Round', 'Philippe-Chatrier Court', 10);
  }

  readOnlyArrayTyples() {
    return this._exemploreadonlyService.somar();
  }

  costAssetions() {
    console.log(this._exemplocostassertionsService.getBot());
  }

}
