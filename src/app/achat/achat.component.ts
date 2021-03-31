import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-achat',
  templateUrl: './achat.component.html',
  styleUrls: ['./achat.component.css']
})
export class AchatComponent implements OnInit {
  formulaire = new FormGroup({
    lieu: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    prix: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    date_achat: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
  }
  );

  /*
  onSubmit(){
    this.achat={...this.achat, ...this.formulaire.value}
    console.log(this.achat);
    this.achatServices.ajo
  }

   */

  constructor() { }

  ngOnInit(): void {
  }

  get lieu(): AbstractControl {
    return this.formulaire.get('lieu');
  }

  get prix(): AbstractControl {
    return this.formulaire.get('prix');
  }

  get date_achat(): AbstractControl {
    return this.formulaire.get('date_achat');
  }


}
