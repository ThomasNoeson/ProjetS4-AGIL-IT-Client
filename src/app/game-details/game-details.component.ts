import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {GameDetailsService} from '../_services/game-details.service';
import {GameDetails} from '../_models/game-details';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-details-jeu',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']

})

export class GameDetailsComponent implements OnInit {
  loading: boolean;
  gameDetails: GameDetails;
  gameId: number;

  formulaire = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
    nombrejoueurs: new FormControl('', [Validators.required, Validators.pattern('^[2-8]*$'), Validators.maxLength(1)]),
    ageminimum: new FormControl('', [Validators.required, Validators.pattern('^\\d$|^1[0-6]$'), Validators.maxLength(2)]),
    poids: new FormControl('', [Validators.required, Validators.min(0.100), Validators.max(5)]),
  });

  public listItems: Array<string> = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5'
  ];

  constructor(private gameDetailsService: GameDetailsService, private messageService: MessageService, private router: Router) {
    this.loading = false;
    let href: Array<string> = this.router.url.split('/');
    console.log(href);
    this.gameId = parseInt(href[href.length - 1]);
  }

  ngOnInit(): void {
    this.loading = true;
    this.gameDetailsService.getGameDetails(this.gameId).subscribe(
      gameDetails => {
        this.gameDetails = {...this.gameDetails, ...gameDetails};
        this.loading = false;
      },
      (err) => {
        this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'impossible d\'obtenir les détails du jeu\n', key: 'main'});
        console.error(err);
        this.loading = false;
        this.router.navigateByUrl('/');
      }
    );
  }
}
