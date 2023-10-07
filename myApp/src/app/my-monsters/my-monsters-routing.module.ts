import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyMonstersPage } from './my-monsters.page';

const routes: Routes = [
  {
    path: '',
    component: MyMonstersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyMonstersPageRoutingModule {}
