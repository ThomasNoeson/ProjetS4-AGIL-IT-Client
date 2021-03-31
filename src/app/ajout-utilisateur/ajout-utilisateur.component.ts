import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
// @ts-ignore
import {MesValidateurs} from '../mes-validateurs';
import {UserInfo} from '../_models/user-info';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.css']
})
export class AjoutUtilisateurComponent implements OnInit {

  user: UserInfo;

  formulaire: FormGroup = new FormGroup({
      nom: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      prenom: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      pseudo: new FormControl(undefined, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      email: new FormControl(undefined, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      pwd: new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        passwordconfirm: new FormControl('', [Validators.required])
      }, [MesValidateurs.passwordConfirming])
    }
  );

  constructor(public userServices: UserService) {
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

  get email(): AbstractControl {
    return this.formulaire.get('email');
  }

  get pwd(): AbstractControl {
    return this.formulaire.get('pwd');
  }

  get password(): AbstractControl {
    return this.formulaire.get('pwd').get('password');
  }

  get passwordconfirm(): AbstractControl {
    return this.formulaire.get('pwd').get('passwordconfirm');
  }

  onSubmit() {
    let infos = {"nom": this.nom.value, "prenom": this.prenom.value, "pseudo": this.pseudo.value, "email": this.email.value, "password": this.password.value};
    this.user = {...this.user, ...infos};
    console.log(this.user);
    this.userServices.creerUser(this.user)
  }
}
