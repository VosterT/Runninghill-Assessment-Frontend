import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { WordsComponent } from "./words/words.component";
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, WordsComponent,FormsModule, ReactiveFormsModule]
})
export class AppComponent {
  
  title = 'runninghill-assessment';

  form : FormGroup;

  Options: Array<any> = [
    {name: 'Cricket', value: 'Crricket'},
    {name: 'TV', value: 'TV'},
    {name: 'Books', value: 'Bookes'},
    {name: 'Movies', value: 'Movies'},
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
      description:['', Validators.required]
      
    })
  }

  onCheckboxChange(e:any){
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if(e.target.checked){
      checkArray.push(new FormControl(e.target.value));
    }else{
      var i = 0;

      checkArray.controls.forEach((item: any) =>{
        if(item.value == e.target.value){
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
      
    }
  }

  submitForm(){
    console.log(this.form.value)
  }

  
  
}
