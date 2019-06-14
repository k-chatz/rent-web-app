import {Component, OnInit} from '@angular/core';
import {
  Event,
  GuardsCheckEnd,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ToastrService} from 'ngx-toastr';
import {SimpleSmoothScrollService} from 'ng2-simple-smooth-scroll';
import {RoutingState} from './shared/services/routing-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showLoadingIndicator = true;

  constructor(
    private translate: TranslateService,
    private router: Router,
    private toastr: ToastrService,
    private smooth: SimpleSmoothScrollService,
    private routingState: RoutingState
  ) {
    translate.setDefaultLang('gr');
    routingState.loadRouting();
  }

  ngOnInit() {
    this.router.events.subscribe((routerEvent: Event) => {
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
        if (this.router.url.includes('search')) {
          // this.smooth.smoothScrollToTop({duration: 1000, easing: 'easeOutQuint', offset: 600});
        } else {
          this.smooth.smoothScrollToTop({duration: 0, easing: 'easeOutQuint', offset: 0});
        }
      }
      if (routerEvent instanceof NavigationError) {
        console.error('Access denied');
      }

    });
  }
}
