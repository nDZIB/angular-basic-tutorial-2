import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  name = '';
  btnLabel = 'Start'

  handleClickEvent() {
    this.name = 'Bruno TY';
    this.btnLabel = 'Continue'
  }
}
