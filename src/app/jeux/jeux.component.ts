import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../_models/user-info';
import {UserService} from '../_services/user.service';
import {MessageService, SelectItem} from 'primeng/api';
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
  sortOptions: SelectItem[];

  constructor(private jeuxService: JeuxService, private messageService: MessageService, private router: Router) {
    this.loading = false;
  }

  ngOnInit(): void {
    this.loading = true;
    this.jeuxService.getJeux().subscribe(
      jeuxx => {
        this.jeux = jeuxx;
        this.loading = false;
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'impossible',
          key: 'main'
        });
        this.loading = false;
        this.router.navigateByUrl('/');
      }
    );

    this.sortOptions = [
      {label: 'Nom', value: 'nom'},
      {label: 'Note', value: 'note'}
    ];
  }

  onSortChange($event): void {
    this.loading = true;
    this.jeuxService.getJeuxTri($event).subscribe(
      jeuxx => {
        this.jeux = jeuxx;
        this.loading = false;
        this.router.navigateByUrl('/jeux');
      },
      (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Erreur',
          detail: 'impossible',
          key: 'main'
        });
        this.loading = false;
        this.router.navigateByUrl('/');
      }
    );
  }
}
