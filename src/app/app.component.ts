import {Component, OnInit} from '@angular/core';
import {GuardsCheckEnd, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showLoadingIndicator = true;

  constructor(private translate: TranslateService,
              private router: Router) {

    translate.setDefaultLang('gr');
    this.router.events.subscribe((routerEvent: any) => {

      if (routerEvent instanceof GuardsCheckEnd) {
        if (!routerEvent.shouldActivate) {
          /*          this.toastyService.warning({
                      title: 'Access Denied',
                      showClose: false,
                      theme: 'default',
                    });*/
        }
      }

      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }

      if (routerEvent instanceof NavigationError) {
        /*this.toastyService.error({
          title: routerEvent.error.message.name,
          msg: routerEvent.error.message,
          showClose: false,
          theme: 'default',
        });*/
      }
    });
  }
}
