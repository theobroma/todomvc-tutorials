import { createContext } from 'react';
import { action, makeAutoObservable, observable, reaction } from 'mobx';

import type { FilterType } from '../@types/filter';

class FilterStore {
  constructor() {
    makeAutoObservable(this);
    reaction(
      () => this.filter,
      (_) => console.log(this.filter),
    );
  }

  @observable filter: FilterType = 'SHOW_ALL';

  @action setFilter = (value: FilterType) => {
    this.filter = value;
  };

  //   @computed get info() {
  //     return {
  //       filter: this.filter,
  //     };
  //   }
}

export default createContext(new FilterStore());
