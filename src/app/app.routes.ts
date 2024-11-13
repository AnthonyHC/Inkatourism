import { Routes } from '@angular/router';
import {RegisterComponent} from './public/pages/register/register.component';
import {SignInComponent} from './public/pages/sign-in/sign-in.component';
import {MainToolbarComponent} from './public/components/main-toolbar/main-toolbar.component';
import {LandingPageComponent} from './public/pages/landing-page/landing-page.component';
import {MainPageComponent} from './public/pages/main-page/main-page.component';
import {PageNotFoundComponent} from './public/pages/page-not-found/page-not-found.component';
import {NotificationsComponent} from './public/pages/notifications/notifications.component';
import {ProfileComponent} from './public/pages/profile/profile.component';
import {HomeComponent} from './public/pages/inicio/inicio.component';

export const routes: Routes = [
  { path: 'mainToolbar', component: MainToolbarComponent, children: [
      {path: 'home', component: LandingPageComponent},
      { path: 'signIn',         component: SignInComponent},
      { path: 'register',       component: RegisterComponent},
      {path: 'notification', component: NotificationsComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'inicio', component: HomeComponent},
    ]},
  { path: 'mainPage',            component: MainPageComponent, children: [


    ]},

  { path: '',                    redirectTo: 'mainToolbar/home', pathMatch: 'full' },
  { path: '**',                  component: PageNotFoundComponent }


];
