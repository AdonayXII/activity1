import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


const endpoint = "http://localhost:8080/monsters";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MonsterService {

  constructor(private httpClient: HttpClient) { }

  getMonsterById(id: number): Observable<any> {
    return this.httpClient.get(endpoint + "/" + id);
  }

  getMonsters() {
    return this.httpClient.get(endpoint);
  }

  add(monster: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("name", monster.name);
    body.append("type", monster.type);
    body.append("weak_element", monster.weak_element);
    body.append("element_apply", monster.element_apply);
    let bodyencoded = body.toString();

    return this.httpClient.post(endpoint, bodyencoded, httpOptions)
  }

  update(id: number, monster: any): Observable<any> {
    let body = new URLSearchParams();
    body.append("name", monster.name);
    body.append("type", monster.type);
    body.append("weak_element", monster.weakElement);
    body.append("element_apply", monster.elementApply);
    let bodyencoded = body.toString();

    return this.httpClient.put(`${endpoint}/${id}`, bodyencoded, httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(endpoint + "/" + id);
  }

}
