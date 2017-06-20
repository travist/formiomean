import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormioResourceService, FormioResourceComponent } from 'ng2-formio/resource';

@Component({
  selector: 'app-event-resource',
  templateUrl: './event-resource.component.html',
  styleUrls: ['./event-resource.component.sass']
})
export class EventResourceComponent extends FormioResourceComponent implements OnInit {

  constructor(public service: FormioResourceService, public route: ActivatedRoute) {
    super(service, route);
  }

  ngOnInit() {
  }

}
