import { Component, OnInit } from '@angular/core';
import {FileUploaderService} from '../../../../shared/services/file-uploader.service';
import {AuthenticationService} from '../../../../shared/services/authentication.service';
import {User} from '../../../../shared/models/user';
import {environment} from '../../../../../environments/environment';
import {UserService} from '../../../../shared/services/user.service';
import {Profile} from '../../../../shared/models/profile';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {

  url = '';
  private signedInUser: User;

  private profile: Profile;

  sessionSub: any;


  constructor(
    private auth: AuthenticationService,
    private userService: UserService,
    private fileUploadService: FileUploaderService
  ) { }

  ngOnInit() {
    this.sessionSub = this.auth.session$.subscribe( session => {
      this.signedInUser = session.user;
      console.log(this.signedInUser);

      // Get user's profile which contains the profile_photo-url.
      this.userService.getProfileByUsername(this.signedInUser.username).subscribe( profile => {
        this.profile = profile;
        console.log(this.profile);

        const profilePhotoUrl = this.profile.photo_url;

        if ( profilePhotoUrl != null ) {
          this.url = profilePhotoUrl;
        } else {  // If the url is null, then request a dummy profile photo from the backend.
          this.url = `${environment.usersEndpoint}/${this.signedInUser.id}/profile_photo`;
        }
        console.log(this.url);

        // Change photo-url in session
        this.auth.session.profile.photo_url = this.url;
      });
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {

      // Upload file to be saved in the backend.
      this.fileUploadService.uploadProfilePhoto(event.target.files[0], this.signedInUser.id);

      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (readerEvent: any) => { // called once readAsDataURL is completed
        this.url = readerEvent.target.result;
      };
    } else {
      console.error('Something\'s wrong in "onSelectFile()"!');
    }
  }

  public delete() {
    this.url = null;
  }

}
