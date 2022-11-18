import React, { FC, useEffect } from 'react';
import { useRootStore } from '../../hooks/useRootStore';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import { Pagination } from '../../components/Pagination';
import { Grid } from '@mui/material';
import HouseCard from '../../components/HouseCard/HouseCard';
import { useSearchParams } from 'react-router-dom';

const pageSize = 12;

export const Home: FC = observer(() => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { housesStore, favoritesStore } = useRootStore();
  const pageQuery = Number(searchParams.get('page')) || 1;

  useEffect(() => {
    favoritesStore.getFavoriteHouses();
  }, [favoritesStore]);

  useEffect(() => {
    housesStore.getHouses({ page: pageQuery, pageSize: pageSize });
  }, [housesStore, pageQuery]);

  const handlePage = (page: number) => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };

  return (
    <Box display="flex" width="100%">
      <Pagination
        itemsCount={housesStore.houses.length}
        currentPage={pageQuery}
        handlePage={handlePage}
        isLoading={(!housesStore.isLoadingHouses && !favoritesStore.isLoadingFavoriteHouses)}
      >
        <Grid container spacing={2}>
          {housesStore.houses?.map(house => (
            <Grid key={house.url} item xs={4} sx={{ height: 'auto' }}>
              <HouseCard item={house} />
            </Grid>
          ))}
        </Grid>
      </Pagination>
    </Box>
  );
});
