import {Component} from '@angular/core';

@Component({
  selector: 'av-loader',
  template: `
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  `,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
}
