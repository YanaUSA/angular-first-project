import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  legendName: string = 'Password strength checker';
  value: string = '';

  inputHandler(event: any) {
    const value = event.target.value;
    console.log(value);

    // console.log(this.passwordValue);
    // this.values += event.target.value + ' | ';
  }
}
