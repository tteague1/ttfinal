import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Login } from '../pages/login/login';
import { MyApp } from './app.component';
import { About } from '../pages/about/about';
import { Participant } from '../pages/participant/participant';
import { Info } from '../pages/info/info';
import { Event } from '../pages/event/event';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    Login,
    About,
    Info,
    Participant,
    Event,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    About,
    Info,
    Participant,
    Event,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
