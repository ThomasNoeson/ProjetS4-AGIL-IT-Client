import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {MesValidateurs} from '../mes-validateurs';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})

export class AjoutUtilisateurComponent implements OnInit {
  formulaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    pseudo: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormGroup({
      mdp: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmMdp: new FormControl('', [Validators.required, Validators.minLength(8)])
    }, [MesValidateurs.passwordConfirming])
  });

  constructor() { }

  ngOnInit(): void {
  }

  get nom(): AbstractControl {
    return this.formulaire.get('nom');
  }

  get prenom(): AbstractControl {
    return this.formulaire.get('prenom');
  }

  get pseudo(): AbstractControl {
    return this.formulaire.get('pseudo');
  }

  get mail(): AbstractControl {
    return this.formulaire.get('mail');
  }

  get mdp(): AbstractControl {
    return this.formulaire.get('password').get('mdp');
  }
  get confirmMdp(): AbstractControl {
    return this.formulaire.get('password').get('confirmMdp');
  }
  get password(): AbstractControl {
    return this.formulaire.get('password');
  }

}
