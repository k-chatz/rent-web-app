import {Injectable} from '@angular/core';
import {Router, RoutesRecognized} from '@angular/router';
import {filter, pairwise} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoutingState {
  private previousUrl: string;

  constructor(
    private router: Router
  ) {
  }

  public loadRouting(): void {
    this.router.events.pipe(
      filter(e => e instanceof RoutesRecognized),
      pairwise()
    ).subscribe((event: any[]) => {
      this.previousUrl = event[0].urlAfterRedirects;
    });
  }

  public getPreviousUrl(): string {
    return this.previousUrl;
  }
}
