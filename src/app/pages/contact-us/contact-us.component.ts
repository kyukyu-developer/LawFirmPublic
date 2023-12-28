
import { Title } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { SharedService } from 'src/app/shared/shared/shared.service';



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  form!: FormGroup;
  formData: any = {};
  submitted = false;
  loading: boolean = false;
  responseResult: string = '';

  constructor(private title: Title, private formBuilder: FormBuilder,
    private shared_: SharedService,
    private contactService: ContactService,
    private elementRef: ElementRef) {
    // this.form = this.formBuilder.group({
    //   name: ['', [Validators.required]],
    //   reply_email: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.email,
    //       Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    //     ],
    //   ],
    //   message: ['', [Validators.required]],
    // });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }
  // onMailEnquiry() {
  //   this.loading = true;
  //   this.submitted = true;

  //   if (this.form.invalid) {
  //     this.loading = false;
  //     return;
  //   }

  //   let param = {
  //     request_id: '',
  //     name: this.f['name'].value,
  //     reply_email: this.f['reply_email'].value,
  //     message: this.f['message'].value,
  //   };


  //   this.contactService
  //     .mailEnquiry(param)
  //     .toPromise()
  //     .then((response: any) => {
  //       let responseID = response.d;
  //       this.responseResult = responseID.split('~')[1];
  //       this.shared_.toastrService.success('Your Form Submitted Successfully');
  //       this.form.reset();

  //       this.submitted = false;
  //     })
  //     .catch((error: any) => {
  //     });


  // }
  sendMessage() {
    this.loading = false
    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }
}


