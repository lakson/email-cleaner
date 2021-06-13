import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  public services = [{
    logo: 'inbox',
    title: 'Bounced Emails',
    text: "All bounced emails from your list will be deleted keeping you good reputation with registrars like Google"
  }, {
    logo: 'unsubscribe',
    text: "Obsolete emails will be deleted and only valid and easily reachable emails will remain",
    title: 'Obsolete Emails'
  }, {
    logo: 'all_inbox',
    text: "CSV and TXT files are taken into account for your convenience. You won't need to convert your existing email lists",
    title: 'CSV and TXT',
  }]
  constructor() { }

  ngOnInit() {
   
  }

  
}
