import React, { FC } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { Container, Box } from '@mui/material';

const App: FC = ({ children }) => (
  <>
    <Box mb={3}>
      <Header />
    </Box>
    <Container>{children}</Container>
    <Box pt={3} />
  </>
);

export default App;
