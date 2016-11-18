import { Component } from '@angular/core';
import { Login } from  '../login/login';
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
  tab1root = Login;
  tab2Root = Event;
  tab3Root = Participant;
  tab4Root = Info;
  tab5Root = About;

  constructor() {

  }
}
