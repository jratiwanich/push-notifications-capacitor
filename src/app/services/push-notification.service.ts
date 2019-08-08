import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  public notifications: BehaviorSubject<Object> = new BehaviorSubject(false);

  constructor() { 

  }

  init(): void {

    let push = (<any> window).PushNotification.init({
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    });

    push.on('registration', (data) => {
      console.log(data.registrationId);
      console.log(data.registrationType);
    });

    push.on('notification', (data) => {

      console.log(data.alert);
      console.log(data.message);
      console.log(data.title);
      console.log(data.count);
      console.log(data.sound);
      console.log(data.image);
      console.log(data.additionalData);    

      this.notifications.next(data);

    });

    push.on('error', (err) => {
      console.log(err);
    });

  }

}
