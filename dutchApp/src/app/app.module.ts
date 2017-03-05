import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CalculatePage} from '../pages/calculate/calculate';
import { PhoneBookPage} from '../pages/phone-book/phone-book';
import { MeetingNamePage} from '../pages/meeting-name/meeting-name';
import {TransmissionPage} from '../pages/transmission/transmission';
import {GroupsPage} from '../pages/groups/groups';

@NgModule({
  declarations: [
    MyApp,
    CalculatePage,
    PhoneBookPage,
    MeetingNamePage,
    TransmissionPage,
    GroupsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CalculatePage,
    PhoneBookPage,
    MeetingNamePage,
    TransmissionPage,
    GroupsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
