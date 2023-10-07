import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'my-monsters',
    loadChildren: () => import('./my-monsters/my-monsters.module').then( m => m.MyMonstersPageModule)
  },
  {
    path: 'add-monster',
    loadChildren: () => import('./add-monster/add-monster.module').then( m => m.AddMonsterPageModule)
  },
  {
    path: 'update-monster/:id',
    loadChildren: () => import('./update-monster/update-monster.module').then( m => m.UpdateMonsterPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
