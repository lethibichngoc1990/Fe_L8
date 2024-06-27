
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  searchTitle: string = ''; // Khai báo thuộc tính searchTitle

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onButtonClick() {
    console.log("Button clicked!", this.searchTitle);
    // Điều hướng đến một trang web bên ngoài
    window.location.href = 'https://app.powerbi.com/view?r=eyJrIjoiMjc4ZjVkN2YtYzM5NS00YWM0LWFmOGUtNTMyNTdjZGFiZWFhIiwidCI6IjYwODY1OGE2LWQ4ZTgtNGJkYy05NDdhLWExZTVjYzQ2ZWNlYSIsImMiOjF9';
  }
}



 