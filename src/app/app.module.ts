import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [],
	bootstrap: []
})
export class AppModule {}