import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ajout-jeux',
  templateUrl: './ajout-jeux.component.html',
  styleUrls: ['./ajout-jeux.component.css']
})

export class AjoutJeuxComponent implements OnInit {
  loading: boolean;
  formulaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    nombrejoueurs: new FormControl('', [Validators.required, Validators.pattern('^[2-8]*$'), Validators.maxLength(1)]),
    ageminimum: new FormControl('', [Validators.required, Validators.pattern('^\\d$|^1[0-6]$'), Validators.maxLength(2)]),
    poids: new FormControl('', [Validators.required, Validators.min(0.100), Validators.max(5)]),
  });

  constructor() {
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true;
  }

  get nom(): AbstractControl {
    return this.formulaire.get('nom');
  }

  get description(): AbstractControl {
    return this.formulaire.get('nom');
  }

  get nombrejoueurs(): AbstractControl {
    return this.formulaire.get('nombrejoueurs');
  }

  get ageminimum(): AbstractControl {
    return this.formulaire.get('ageminimum');
  }

  get poids(): AbstractControl {
    return this.formulaire.get('poids');
  }
}
