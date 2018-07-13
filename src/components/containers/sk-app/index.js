
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';
import '../../dumbs/sk-button';

export default class SkApp extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  startTour() {
    window.location.replace('https://github.com/PolymerX/polymer-skeleton');
  }
}

window.customElements.define('sk-app', SkApp);
