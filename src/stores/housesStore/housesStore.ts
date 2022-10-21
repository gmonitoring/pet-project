import { RootStore } from '../rootStore';
import { getHousesApi, House, housesRequestParams } from '../../api/houses/houses';
import { makeObservable, observable, action } from 'mobx';

export default class HousesStore {
  root: RootStore;
  houses: Array<House> = [];
  isLoadingHouses = false;

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      houses: observable,
      isLoadingHouses: observable,
      getHouses: action,
      setHouses: action,
      setIsLoadingHouses: action,
    });
  }

  async getHouses(params: housesRequestParams): Promise<void> {
    this.setIsLoadingHouses(true);
    const houses = await getHousesApi(params);
    this.setHouses(houses);
    this.setIsLoadingHouses(false);
  }

  setIsLoadingHouses(state: boolean) {
    this.isLoadingHouses = state;
  }

  setHouses(houses: Array<House>) {
    this.houses = houses;
  }
}
