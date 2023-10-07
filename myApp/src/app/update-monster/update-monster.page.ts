import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonsterService } from '../services/monster.service';


@Component({
  selector: 'app-update-monster',
  templateUrl: './update-monster.page.html',
  styleUrls: ['./update-monster.page.scss'],
})
export class UpdateMonsterPage implements OnInit {

  monsterId: number = 0
  oldMonster: any = {}

  monsterForm!: FormGroup
  newMonsterForm!: FormGroup

  constructor(private monsterService: MonsterService, private router: Router, private activatedRoute: ActivatedRoute, public formBuilder: FormBuilder) {
    this.monsterForm = this.formBuilder.group({});
    this.newMonsterForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.monsterId = +this.activatedRoute.snapshot.paramMap.get('id')!
    this.monsterService.getMonsterById(this.monsterId).subscribe((data) => { this.oldMonster = data })

    this.monsterForm = this.oldMonster;

    this.newMonsterForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
          Validators.maxLength(45)
        ]],
      type: [
        '',
        [
          Validators.required,
          Validators.maxLength(45),
        ],
      ],
      weakElement: [
        '',
        [
          Validators.required,
          Validators.maxLength(45),
        ],
      ],
      elementApply: [
        '',
        [
          Validators.required,
          Validators.maxLength(45),
        ],
      ]
    });
  }

  updateMonsterForm() {
    console.log(this.monsterId)
    console.log(this.newMonsterForm.value)


    this.monsterService.update(this.monsterId, this.newMonsterForm.value).subscribe(() => {
      console.log("funciona")
      this.router.navigateByUrl("/my-monsters")
    });
  }

  gotoMyHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMonsters() {
    this.router.navigateByUrl("/my-monsters");
  }

}
