import React, { FC, useEffect } from 'react';
import { useRootStore } from '../../hooks/useRootStore';
import { observer } from 'mobx-react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import HouseCard from '../../components/HouseCard/HouseCard';
import CircularProgress from '@mui/material/CircularProgress';

export const Favorites: FC = observer(() => {
  const { favoritesStore } = useRootStore();

  useEffect(() => {
    favoritesStore.getFavoriteHouses();
  }, [favoritesStore]);

  return (
    <Box display="flex" width="100%">
      <Grid container spacing={2}>
        {!favoritesStore.isLoadingFavoriteHouses ? (
          favoritesStore.favoritesHouses.length > 0 ? (
            favoritesStore.favoritesHouses.map(house => (
              <Grid key={house.url} item xs={4} sx={{ height: 'auto' }}>
                <HouseCard item={house} isNotFound={house.isNotFound} />
              </Grid>
            ))
          ) : (
            <Box display="flex" width="100%" justifyContent="center" p={5}>
              <Typography variant="h4" color="text.secondary">
                No result :(
              </Typography>
            </Box>
          )
        ) : (
          <Box display="flex" justifyContent="center" pt={16} width="100%">
            <CircularProgress />
          </Box>
        )}
      </Grid>
    </Box>
  );
});
