import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
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
          Ionic input components demo for a{' '}
          <a href="https://github.com/ionic-team/ionic/issues/20957">
            github issue
          </a>
        </p>
        <p>
          When using <code>@ionic/core@^5.0.6</code> and{' '}
          <code>@stencil/core@~1.8.8</code>, the ion-label doesn't respect the
          position="stacked" attribute.
        </p>
        <p>
          Also, the items in the pop up of ion-select cannot be selected (not
          clickable).
        </p>

        <ion-list>
          <ion-item>
            <ion-label position="stacked"> Label 1</ion-label>
            <ion-select placeholder="ion-select">
              <ion-select-option value="1"> option 1</ion-select-option>
              <ion-select-option value="2"> option 2</ion-select-option>
            </ion-select>
          </ion-item>
          <ion-item>
            <ion-label position="stacked"> Label 2</ion-label>
            <ion-input type="text" placeholder='ion-input type="text"' />
          </ion-item>
          <ion-item>
            <ion-label position="stacked"> Label 3</ion-label>
            <ion-textarea placeholder="ion-textarea" />
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}
