import { Component, OnInit } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'ng2-formio/resource';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.sass']
})
export class EventViewComponent extends FormioResourceViewComponent implements OnInit {

  constructor(service: FormioResourceService, config: FormioResourceConfig) {
    super(service, config);
  }

  ngOnInit() {
  }

}
