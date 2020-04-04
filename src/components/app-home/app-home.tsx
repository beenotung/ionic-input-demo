import {Component, h} from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Ionic input components demo
          for a <a href='https://github.com/ionic-team/ionic/issues/20957'>
          github issue
        </a>
        </p>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
      </ion-content>
    ];
  }
}
