import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: "inicio",
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }, {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'

  }, {
    path: "**",
    component:NotfoundComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
