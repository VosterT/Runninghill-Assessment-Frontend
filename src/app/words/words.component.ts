import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe} from '@angular/common';
import {MatCheckboxChange, MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

/** @title Checkboxes with reactive forms */
@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe, HttpClientModule,CommonModule],
})
export class WordsComponent {

  title = 'words';

   
  optionsL = [
    {id:1, select: true, optionDescription:'Doing'},
    {id:2, select: true, optionDescription:'Feeling'},
    {id:3, select: false, optionDescription:'Talk'},
  ]
  // optionsList = this._formBuilder.group({
  //   options: false,
  // });

  //  options:any;
  //  sentence:any;
  // // reactiveForm: FormGroup;

  //  constructor(private _formBuilder: FormBuilder, private http:HttpClient) {}

  // ngOnInit(){
  // let getSentence = this.http.get("http://localhost:8080/runninghill/sentence/Test");
  // getSentence.subscribe((data)=>this.sentence=data);
  //  let optionsList = this.http.get("http://localhost:8080/runninghill/options/Test");
  //  optionsList.subscribe((data)=>this.options=data);

  //  this.optionsL = this.optionsL.map((data) => this.options=data )
  // }
  //  this.reactiveForm = new FormGroup({
  //     options: new FormArray([
  //       new FormControl(optionsList.subscribe,Validators.required)
  //     ])
  //  })
  //  this.optionsList.valueChanges.subscribe((value) => {console.log(value);})
  // }
  
  showOptions($event){

    const id = $event.target.value;
    const isChecked = $event.target.checked;

    this.optionsL = this.optionsL.map((d) => {
      if(d.id == id){
        d.select = isChecked;
        return d;
      }
      return d;

    });

    console.log("Test ..... " + id + "...." + isChecked + "....." + this.optionsL);
  }
}