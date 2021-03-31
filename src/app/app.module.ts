import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthentificationService} from './_services/authentification.service';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {registerLocaleData} from '@angular/common';
import {MomentModule} from 'ngx-moment';
import 'moment/locale/fr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from './_services/jwt-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from './_services/user.service';
import { LpSolverTestComponent } from './lp-solver-test/lp-solver-test.component';
import {MarkdownModule} from 'ngx-markdown';
import {MenubarModule} from 'primeng/menubar';
import {TabMenuModule} from 'primeng/tabmenu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { JeuxComponent } from './jeux/jeux.component';
import {JeuxService} from './_services/jeux.service';
import { AjoutUtilisateurComponent } from './ajout-utilisateur/ajout-utilisateur.component';
import {PanelModule} from 'primeng/panel';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {GameDetailsComponent} from './game-details/game-details.component';
import {AjoutJeuxComponent } from './ajout-jeux/ajout-jeux.component';


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LpSolverTestComponent,
    AcceuilComponent,
    JeuxComponent,
    AjoutUtilisateurComponent,
    GameDetailsComponent,
    AjoutJeuxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    AppRoutingModule,
    MomentModule,
    MessagesModule,
    ToastModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenubarModule,
    TabMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    ButtonModule,
    CardModule,
    PanelModule,
    DataViewModule,
    DropdownModule
  ],
  providers: [AuthentificationService, MessageService,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    UserService,
    JeuxService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
