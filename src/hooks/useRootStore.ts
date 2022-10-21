import { useContext } from 'react';
import { StoreContext } from '../utils/rootStoreContext';
import { RootStore } from '../stores/rootStore';

export function useRootStore(): RootStore {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}
