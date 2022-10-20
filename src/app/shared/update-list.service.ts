import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateListService {
  public update_list: Subject<boolean>

  constructor() {
    this.update_list = new Subject();
  }

  nextMethod(bool: boolean) {
    this.update_list.next(bool)
  }

}