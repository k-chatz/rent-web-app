import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {Title} from '@angular/platform-browser';
import {first, timeout} from 'rxjs/operators';
import {TextAnimation} from 'ngx-teximate';
import {fadeIn} from 'ng-animate';
import {HttpClient} from '@angular/common/http';
import {FileReaderService} from '../../../shared/services/file-reader.service';
import {FileUploaderService} from '../../../shared/services/file-uploader.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  enterAnimation: TextAnimation = {
    animation: fadeIn,
    delay: 5,
    type: 'letter'
  };
  private users: any;
  destinations = [
    {
      title: 'Meteora',
      image: '../../../../assets/images/forest-1906850640.jpg',
      destination: 'Meteora',
      lat: '39.7217044',
      lng: '21.6284009',
    },
    {
      title: 'Volos',
      image: '../../../../assets/images/greece-4181705640.jpg',
      destination: 'Volos',
      lat: '39.3651995',
      lng: '22.929803',
    },
    {
      title: 'Athens',
      image: '../../../../assets/images/acropolis-12044640.jpg',
      destination: 'Athens',
      lat: '37.9838096',
      lng: '23.727538800000048',
    },
    {
      title: 'Rome',
      image: '../../../../assets/images/rome173472640.jpg',
      destination: 'Rome',
      lat: '41.9102411',
      lng: '12.3955705',
    },
    {
      title: 'London',
      image: '../../../../assets/images/london-3078109640.jpg',
      destination: 'London',
      lat: '51.5287714',
      lng: '-0.2420248',
    },
    {
      title: 'Paris',
      image: '../../../../assets/images/eiffel-tower-498378640.jpg',
      destination: 'Paris',
      lat: '48.8589506',
      lng: '2.2768485',
    },
  ];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private titleService: Title,
    public uploader: FileUploaderService,
    public reader: FileReaderService,
    private router: Router,
  ) {
    titleService.setTitle(environment.appName);
  }

  get session$() {
    return this.auth.session$;
  }

  ngOnInit() {
  }

  login(email: string) {
    this.auth.login({
      email,
      password: 'asdfk2.daADd'
    }).pipe(first())
      .subscribe((response: any) => console.log('response', response));
  }

  forceTimeout() {
    this.http.get('https://httpstat.us/200?sleep=5000')
      .subscribe(response => {
        console.log('forceTimeout', response);
      }, (error) => {
        console.log('Error', error);
      });
  }

  onCompleteItem($event) {
    console.log($event);
  }

  logout() {
    this.auth.logout();
  }

  getUsers() {
    this.http.get('https://localhost:8443/api/users')
      .subscribe(response => {
        console.log('forceTimeout', response);
        this.users = response;
      }, (error) => {
        console.log('Error', error);
      });
  }

  onClickRecommendation(place: any) {
    this.router.navigate(['search'], {
      queryParams: {
        radius: 5,
        destination: place.destination,
        lat: place.lat,
        lng: place.lng,
      }
    });
  }
}
