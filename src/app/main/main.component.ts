import {Component, OnInit} from '@angular/core';
import {Ng7BootstrapBreadcrumbService} from 'ng7-bootstrap-breadcrumb';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ng7BootstrapBreadcrumbService: Ng7BootstrapBreadcrumbService) {
  }

  ngOnInit() {
    const breadcrumb = {customText: 'This is Custom Text', dynamicText: 'Level 2 '};
    this.ng7BootstrapBreadcrumbService.updateBreadcrumbLabels(breadcrumb);
  }

}
