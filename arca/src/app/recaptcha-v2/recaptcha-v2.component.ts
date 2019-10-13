import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recaptcha-v2',
  templateUrl: './recaptcha-v2.component.html',
  styleUrls: ['./recaptcha-v2.component.scss'],
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LfGYr0UAAAAADtqJxa4iHT-IEWgDCe5666vQK6d"></re-captcha>`,
})
export class RecaptchaV2Component implements OnInit {

  constructor() { }
resolved(captchaResponse: string) {
  console.log(`Resolved captcha with response: ${captchaResponse}`);
}
  ngOnInit() {
  }

}

// @Component({
//   selector: 'my-app',
//   template: `<re-captcha (resolved)="resolved($event)" siteKey="YOUR_SITE_KEY"></re-captcha>`,
// }) export class MyApp {
//   resolved(captchaResponse: string) {
//       console.log(`Resolved captcha with response: ${captchaResponse}`);
//   }
// }