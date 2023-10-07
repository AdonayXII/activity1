import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = "juan";
  type: string = "bartolo";
  weak_element: string = "agua";
  element_apply: string = "piedra";

  constructor(private router: Router) { }

  gotoMyMonsters() {
    this.router.navigateByUrl("/my-monsters");
  }

  gotoMyMonsterAddPage(){
    this.router.navigateByUrl("/add-monster");
  }

}
