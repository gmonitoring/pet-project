import * as React from 'react';
import { FC } from 'react';
import { House } from '../../api/houses/houses';
import { Card, CardContent, CardActions, IconButton, Typography, Box, useTheme } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { observer } from 'mobx-react';
import { useRootStore } from '../../hooks/useRootStore';
import StarIcon from '@mui/icons-material/Star';

export type HouseCardProps = {
  item: House;
  isNotFound?: boolean;
};

const HouseCard: FC<HouseCardProps> = observer(({ item, isNotFound = false }) => {
  const theme = useTheme();
  const { favoritesStore } = useRootStore();

  const handleAddFavorite = () => {
    favoritesStore.addFavorite({ ...item, isNotFound });
  };

  const handleRemoveFavorite = () => {
    favoritesStore.removeFavorite({ ...item, isNotFound });
  };

  return (
    <Card variant="outlined" sx={{ background: theme.palette.custom.bg, height: '100%' }}>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <CardContent>
          <Typography color="custom.greenLight" variant="h4" gutterBottom>
            {item.name}
          </Typography>
          <Typography color="custom.lagunaDark" variant="h5" gutterBottom>
            Region: {item.region}
          </Typography>
          {item.coatOfArms && (
            <>
              <Typography color="custom.lagunaLight" gutterBottom>
                Coast of arms
              </Typography>
              <Typography color="custom.secondary" variant="subtitle2" gutterBottom>
                {item.coatOfArms}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            {favoritesStore.favoritesHouses.find(i => i.url === item.url) ? (
              <IconButton size="small" onClick={handleRemoveFavorite}>
                <StarIcon />
              </IconButton>
            ) : (
              <IconButton size="small" onClick={handleAddFavorite}>
                <StarBorderIcon />
              </IconButton>
            )}
            {isNotFound && <Typography color="error.light">Not found</Typography>}
          </Box>
        </CardActions>
      </Box>
    </Card>
  );
});

export default HouseCard;
