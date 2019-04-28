import {Component} from '@angular/core';
import {GuardsCheckEnd, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showLoadingIndicator = true;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient,
  ) {
    translate.setDefaultLang('gr');
    this.router.events.subscribe((routerEvent: any) => {
      if (routerEvent instanceof GuardsCheckEnd) {
        if (!routerEvent.shouldActivate) {
          console.error('Route should activated', routerEvent.shouldActivate);
          /*this.toastr.warning('No rights to access this route!', 'Protected route');*/
        }
      }
      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        this.showLoadingIndicator = false;
      }
      if (routerEvent instanceof NavigationError) {
        console.error('Access denied');
        this.toastr.error(routerEvent.error.message, 'Access denied: ' + routerEvent.error.message.name);
      }
    });
  }
}
