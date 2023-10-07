import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyMonstersPageRoutingModule } from './my-monsters-routing.module';

import { MyMonstersPage } from './my-monsters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyMonstersPageRoutingModule
  ],
  declarations: [MyMonstersPage]
})
export class MyMonstersPageModule {}
