import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { WordsComponent } from "./words/words.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, WordsComponent]
})
export class AppComponent {
  constructor() {}
  title = 'runninghill-assessment';
}
