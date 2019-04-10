import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'githubimporter-ui';
  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.body, 'background-color', '#ecf0f1');
  }
}
