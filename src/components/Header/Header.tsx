import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { FC } from 'react';
import { Link } from '@mui/material';
import { ReactComponent as MyLogo } from '../../static/icons/LogoIcon.svg';

const pages = [
  { url: '/', name: 'Houses' },
  { url: '/favorites', name: 'Favorites' },
];

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <MyLogo />
          <Box display="flex">
            {pages.map(page => (
              <Box key={page.name} m={2} color="white" display="block">
                <Link href={page.url} color="inherit">
                  {page.name}
                </Link>
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
