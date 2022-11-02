import { RootStore } from '../rootStore';
import { getHouseApi, House } from '../../api/houses/houses';
import { makeObservable, observable, action } from 'mobx';

export type FavoriteHouse = House & { isNotFound: boolean };

export default class FavoritesStore {
  root: RootStore;
  isLoadingFavoriteHouses = false;
  favoritesHouses: Array<FavoriteHouse> = [];

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      isLoadingFavoriteHouses: observable,
      favoritesHouses: observable,
      getFavoriteHouses: action,
      setFavoriteHouses: action,
      setIsLoadingFavoriteHouses: action,
    });
  }

  async getFavoriteHouses(): Promise<void> {
    this.setIsLoadingFavoriteHouses(true);
    const lsFavoritesHouse = window.localStorage.getItem('favoritesHouse') ?? '[]';

    const favoritesLs: Array<FavoriteHouse> = JSON.parse(lsFavoritesHouse);

    const ids: Array<string> = favoritesLs.map(i => {
      const split = i.url.split('/');
      return split[split.length - 1];
    });

    const promises = ids.map(id => getHouseApi({ id: id }));

    await Promise.allSettled(promises).then(results => {
      const favoriteHouses = results.map((i, index) => ({
        ...favoritesLs[index],
        isNotFound: i.status !== 'fulfilled',
      }));
      this.setFavoriteHouses(favoriteHouses);
      this.setIsLoadingFavoriteHouses(false);
    });
  }

  setIsLoadingFavoriteHouses(state: boolean) {
    this.isLoadingFavoriteHouses = state;
  }

  setFavoriteHouses(favorites: Array<FavoriteHouse>) {
    this.favoritesHouses = favorites;
    window.localStorage.setItem('favoritesHouse', JSON.stringify(favorites));
  }

  addFavorite = (item: FavoriteHouse) => {
    let newFavoriteHouses: Array<FavoriteHouse>;

    if (this.favoritesHouses.length === 0) {
      newFavoriteHouses = [{ ...item, isNotFound: item.isNotFound }];
    } else {
      const house: FavoriteHouse = { ...item, isNotFound: item.isNotFound };
      newFavoriteHouses = [...this.favoritesHouses, house];
    }
    this.setFavoriteHouses(newFavoriteHouses);
  };

  removeFavorite = (item: FavoriteHouse) => {
    const houses: Array<FavoriteHouse> = this.favoritesHouses.filter(house => house.url !== item.url);
    this.setFavoriteHouses(houses);
  };
}
