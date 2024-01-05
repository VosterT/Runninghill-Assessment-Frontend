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
  optionsList = this._formBuilder.group({
    options: false,
    doing : true,
  });

  options:any;
  sentence:any;
  reactiveForm: FormGroup;
  baseURL: "http://localhost:8080/runninghill";
  
  item = new FormControl();
  opt: string[] = [];

  constructor(private _formBuilder: FormBuilder, private http:HttpClient) {}

  ngOnInit(){
  let getSentence = this.http.get("http://localhost:8080/runninghill/sentence/Test");
  getSentence.subscribe((data)=>this.sentence=data);
   let optionsList = this.http.get("http://localhost:8080/runninghill/options/Test");
   optionsList.subscribe((data)=>this.options=data);
  
   this.reactiveForm = new FormGroup({
      options: new FormArray([
        new FormControl(optionsList.subscribe,Validators.required)
      ])
   })
   this.optionsList.valueChanges.subscribe((value) => {console.log(value);})
  }
  
  showOptions(event:any){
    //$event.checked = true;
    console.log("Show options" + event);
    this.opt.push("Voster");
    this.opt.push(event.id);
  }

  onChangeDemo(ob: any) {
    console.log("checked: " + ob.checked);
 } 

}