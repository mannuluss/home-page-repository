import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  backgroundImageVar = 'assets/Shape.svg';

  // constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
  //   iconRegistry.addSvgIcon(
  //       'my-star-icon',
  //       sanitizer.bypassSecurityTrustResourceUrl('assets/icons/my-star-icon.svg'));
  // }
}
