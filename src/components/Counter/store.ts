import { provide } from "../../utils/IoC";
import { action, computed, observable } from "mobx";

@provide.singleton()
export class CounterStore {
  @observable private _count: number = 0;

  @computed
  get count() {
    return this._count;
  }

  @action.bound
  increment() {
    this._count++;
  }

  @action.bound
  decrement() {
    this._count--;
  }
}


