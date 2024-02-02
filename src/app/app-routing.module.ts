import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { AssociationsComponent } from './pages/associations/associations/associations.component';
import { InstitutionalComponent } from './pages/institutional/institutional/institutional.component';
import { RegulationsComponent } from './pages/regulations/regulations/regulations.component';
import { GuideRegistrationComponent } from './pages/guide-registration/guide-registration/guide-registration.component';
import { GuideDirectoryComponent } from './pages/guide-directory/guide-directory/guide-directory.component';
import { LoginComponent } from './pages/login/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'associations', component: AssociationsComponent },
  { path: 'institutional', component: InstitutionalComponent },
  { path: 'regulations', component: RegulationsComponent },
  { path: 'guide-registration', component:GuideRegistrationComponent},
  { path: 'guide-directory', component: GuideDirectoryComponent},
  { path: 'login', component: LoginComponent },
  // Agrega otras rutas según tu estructura
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

