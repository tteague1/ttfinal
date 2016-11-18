import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-participant',
  templateUrl: 'participant.html'
})
export class Participant {
          present:string;
          dropped:string;
          startTime:string;
          endTime:string;
  constructor(public navCtrl: NavController) {

  }

}
