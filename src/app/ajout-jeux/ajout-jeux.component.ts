import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {JeuxService} from '../_services/jeux.service';
import {JeuxInfo} from '../_models/jeux-info';

@Component({
  selector: 'app-ajout-jeux',
  templateUrl: './ajout-jeux.component.html',
  styleUrls: ['./ajout-jeux.component.css']
})

export class AjoutJeuxComponent implements OnInit {

  jeux: JeuxInfo;

  formulaire = new FormGroup({
    nom: new FormControl(undefined, [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    description: new FormControl(undefined, [Validators.required]),
    theme : new FormControl(undefined, [Validators.required]),
    editeur: new FormControl(undefined, [Validators.required]),
    langues : new FormControl(undefined, [Validators.required]),
    age : new FormControl(undefined, [Validators.required, Validators.pattern('([1])?[0-6]+$')]),
    poids : new FormControl(undefined, [Validators.required, Validators.pattern('[0.100-5.00]*')]),
    nombre_joueurs : new FormControl(undefined, [Validators.required, Validators.pattern('[2-8]+')]),
    categorie : new FormControl(undefined, [Validators.required]),
    duree : new FormControl(undefined, [Validators.required]),
    regles : new FormControl(undefined, [Validators.required]),
  });

  constructor(public jeuxServices: JeuxService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.jeux = {...this.jeux, ...this.formulaire.value};
    console.log(this.jeux);
    this.jeuxServices.creerJeux(this.jeux);
  }

  get nom(): AbstractControl {
    return this.formulaire.get('nom');
  }

  get description(): AbstractControl {
    return this.formulaire.get('description');
  }

  get theme(): AbstractControl {
    return this.formulaire.get('theme');
  }

  get editeur(): AbstractControl {
    return this.formulaire.get('editeur');
  }

  get categorie(): AbstractControl {
    return this.formulaire.get('categorie');
  }

  get regles(): AbstractControl {
    return this.formulaire.get('regles');
  }

  get nombre_joueurs(): AbstractControl {
    return this.formulaire.get('nombre_joueurs');
  }

  get age(): AbstractControl {
    return this.formulaire.get('age');
  }

  get poids(): AbstractControl {
    return this.formulaire.get('poids');
  }

  get duree(): AbstractControl {
    return this.formulaire.get('duree');
  }

  get langues(): AbstractControl{
    return this.formulaire.get('langues');
  }

}

