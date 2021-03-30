import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../_models/user-info';
import {UserService} from '../_services/user.service';
import {MessageService} from 'primeng/api';
import {Router} from '@angular/router';
import {JeuxService} from '../_services/jeux.service';
import {JeuxInfo} from '../_models/jeux-info';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {

  loading: boolean;
  jeux: JeuxInfo;

  constructor(private jeuxService: JeuxService, private messageService: MessageService, private router: Router) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.jeuxService.getJeux().subscribe(
      jeux => {
        this.jeux = {...this.jeux, ...jeux};
        this.loading = false;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'impossible d\'obtenir le profil de l\'utilisateur',
          key: 'main'
        });
        this.loading = false;
        this.router.navigateByUrl('/');
      }
    );
  }
}
