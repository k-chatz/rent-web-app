import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../../shared/services/authentication.service';
import {ToastrService} from 'ngx-toastr';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-provider-application-form',
  templateUrl: './provider-application-form.component.html',
  styleUrls: ['./provider-application-form.component.scss']
})
export class ProviderApplicationFormComponent implements OnInit {
  @ViewChild('registerFormName') registerFormName: ElementRef;
  progress = false;
  form: FormGroup;
  returnUrl: string = null;

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthenticationService,
    private toastr: ToastrService
  ) {
    titleService.setTitle('Provider Application');
    this.form = this.fb.group(
      {
        company_name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        patronym: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        company_address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        tax_number: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        tax_office: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        id_card_number: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        id_card_publishing_authority: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        id_card_date_of_issue: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
        residence_address: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]]
      }
    );
  }

  ngOnInit(): void {
    this.registerFormName.nativeElement.focus();
  }

  submit(data: any): void {
    console.log(data);
    this.form.markAsPristine();
    this.progress = true;
    // Todo: request for provider to API
    sessionStorage.setItem('pending_provider', null);
  }

}
