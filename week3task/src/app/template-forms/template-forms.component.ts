import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // get fName():any {
  //   return this.signIn.get('fName');
  // }

  signIn(logIn : any){
    console.log(logIn);
  }

}
