import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-jeux',
  templateUrl: './ajout-jeux.component.html',
  styleUrls: ['./ajout-jeux.component.css']
})
export class AjoutJeuxComponent implements OnInit {
  formulaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    nombrejoueurs: new FormControl('', [Validators.required, Validators.pattern('^[2-8]*$'), Validators.maxLength(1)]),
    ageminimum : new FormControl('', [Validators.required, Validators.pattern('^\\d$|^1[0-6]$'), Validators.maxLength(2)]),
    poids : new FormControl('', [Validators.required, Validators.pattern('^[0-4.9]+\\d{1,2}(?:\\d)?$'), Validators.maxLength(5)]),


  });

  constructor() { }

  ngOnInit(): void {
  }

}
