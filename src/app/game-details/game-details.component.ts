import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {GameDetailsService} from "../_services/game-details.service";
import {GameDetails} from "../_models/game-details";

@Component({
  selector: 'app-details-jeu',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  loading: boolean;
  gameDetails: GameDetails;
  gameId: number;

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
