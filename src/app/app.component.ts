import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bouncedemail';
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    // translate.setDefaultLang('en');
    var userLang = navigator.language;
    switch (userLang.split('-')[0]) {
      case 'fr':
        translate.use('fr');
        break;
      case 'en':
        translate.use('en');
        break;
      default:
        translate.use('en');
        break;
    }

    console.log(userLang);
     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
}
}
