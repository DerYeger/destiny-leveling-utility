import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharacterComponent} from './character/character.component';


const routes: Routes = [
  {
    path: 'hunter',
    component: CharacterComponent
  },
  {
    path: 'titan',
    component: CharacterComponent
  },
  {
    path: 'warlock',
    component: CharacterComponent
  },
  {
    path: '**',
    redirectTo: 'hunter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
