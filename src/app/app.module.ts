import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WordsService } from './words.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientTestingModule
	],
	providers: [WordsService],
	bootstrap: []
})
export class AppModule {}