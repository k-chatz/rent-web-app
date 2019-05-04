import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css']
})
export class ProfileImageComponent implements OnInit {

    url = '';

  constructor() { }

  ngOnInit() {
  }

    onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (readerEvent: any) => { // called once readAsDataURL is completed
        this.url = readerEvent.target.result;
      };
    }
  }
  public delete() {
    this.url = null;
  }

}
