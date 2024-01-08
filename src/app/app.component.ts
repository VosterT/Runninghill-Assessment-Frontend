import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { WordsService } from './words.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet,FormsModule, ReactiveFormsModule]
})
export class AppComponent {
  
  title = 'runninghill-assessment';

  form : FormGroup;

  public Options = [];
  public sentence : any;

  constructor(private fb: FormBuilder, private _worksService: WordsService) {
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
    this._worksService.sendResponse(this.form.value).subscribe(results => {console.warn(results)});
  }

  ngOnInit(){
    this._worksService.getOptions().subscribe(data => this.Options = data);
    this._worksService.getSetence().subscribe(data => this.sentence = data)
  }
  
}
