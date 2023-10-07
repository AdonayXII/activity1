import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonsterService } from '../services/monster.service';
@Component({
  selector: 'app-add-monster',
  templateUrl: 'add-monster.page.html',
  styleUrls: ['add-monster.page.scss'],
})


export class AddMonsterPage implements OnInit {
  monsterForm!: FormGroup;

  constructor(private monsterService: MonsterService, private router: Router, public formBuilder: FormBuilder) {
    this.monsterForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.monsterForm = this.formBuilder.group({
          name: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(45)]],
      type: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(45)
        ],
      ],
      weakElement: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(45)
        ],
      ],
      elementApply: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(45)
        ],
      ]
    });
  }

  get errorControl() {
    return this.monsterForm.controls;
  }

  addMonsterForm = () => {
    if (this.monsterForm.valid) {
      let monster = {
        name: this.monsterForm.value.name,
        type: this.monsterForm.value.type,
        weak_element: this.monsterForm.value.weakElement,
        element_apply: this.monsterForm.value.elementApply
      }
      console.log(this.monsterForm.value);
      this.monsterService.add(monster).subscribe((res) => {
        console.log("funciona");
        this.router.navigateByUrl("/my-monsters");
      });
      return false;
    } else {
      return console.log('Please provide all the required values!');
    }
  };
  
  gotoMyHome() {
    this.router.navigateByUrl("/home");
  }

  gotoMyMonsters() {
    this.router.navigateByUrl("/my-monsters");
  }

}