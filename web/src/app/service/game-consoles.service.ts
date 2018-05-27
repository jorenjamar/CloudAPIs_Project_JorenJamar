import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable"

@Injectable()
export class GameConsolesService {

  constructor(private _http: HttpClient) { }

  getLijst() : Observable<iConsole[]> {
    return this._http.get<iConsole[]>("http://localhost:5000/api/v1/consoles");
  }

}

export interface iConsole {
  id: number;
  name: string;
}
