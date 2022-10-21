import HousesStore from './housesStore/housesStore';
import FavoritesStore from './favoritesStore/favoritesStore';
import { configure } from 'mobx';

configure({ enforceActions: 'observed' });

export class RootStore {
  housesStore: HousesStore;
  favoritesStore: FavoritesStore;

  constructor() {
    this.housesStore = new HousesStore(this);
    this.favoritesStore = new FavoritesStore(this);
  }
}
