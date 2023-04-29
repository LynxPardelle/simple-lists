import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared/services/shared.service';
import { NgxBootstrapExpandedFeaturesService } from 'ngx-bootstrap-expanded-features';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _sharedService: SharedService,
    private _befService: NgxBootstrapExpandedFeaturesService
  ) {}

  ngOnInit() {
    this.cssCreate();
  }

  cssCreate() {
    this._sharedService.cssCreate();
  }
}
