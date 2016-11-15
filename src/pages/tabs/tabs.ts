import { Component } from '@angular/core';
import { About } from  '../about/about';
import { Event } from '../event/event';
import { Participant } from '../participant/participant';
import { Info } from '../info/info';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  tab1Root: any = Event;
  tab2Root: any = Participant;
  tab3Root: any = Info;
  tab4Root: any = About;

  constructor() {

  }
}
