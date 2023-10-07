import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../services/monster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-monsters',
  templateUrl: './my-monsters.page.html',
  styleUrls: ['./my-monsters.page.scss'],
})
export class MyMonstersPage implements OnInit {
  monsterId: number = 0;
  monsters: any = []

  constructor(private monsterService: MonsterService, private router: Router) { }

  ngOnInit() {
    this.getAllMonsters();
  }

  getAllMonsters() {
    this.monsterService.getMonsters().subscribe(response => {
      this.monsters = response;
    })
  }

  gotoMyHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMonsterAddPage() {
    this.router.navigateByUrl("/add-monster");
  }

  gotoMyEditMonsterPage(id: number) {
    this.router.navigateByUrl("/update-monster/" + id)
  }

  delete(id: number) {
    console.log(id)
    this.monsterService.delete(id).subscribe(() => {
      this.getAllMonsters()
    })
  }

}
