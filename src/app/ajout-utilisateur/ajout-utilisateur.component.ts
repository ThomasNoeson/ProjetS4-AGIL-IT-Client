import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {MesValidateurs} from '../mes-validateurs';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {

  formulaire: FormGroup = new FormGroup({
      nom: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      prenom: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      pseudo: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      mail: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      password: new FormGroup({
        pwd: new FormControl('', [Validators.required, Validators.minLength(8)]),
        passwordconfirm: new FormControl('', [Validators.required])
      }, [MesValidateurs.passwordConfirming])
    }
  );

  constructor() {
  }

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

  get password(): AbstractControl {
    return this.formulaire.get('password');
  }

  get pwd(): AbstractControl {
    return this.formulaire.get('password').get('pwd');
  }

  get passwordconfirm(): AbstractControl {
    return this.formulaire.get('password').get('passwordconfirm');
  }
}
