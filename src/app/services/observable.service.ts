import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  private _userList: Subject<User[]> = new BehaviorSubject<User[]>([]);


  constructor() { }

  
  setUserList(list: User[]) {
    this._userList.next(list);
  }

  getUserList() {
    return this._userList.asObservable();
  }
}
