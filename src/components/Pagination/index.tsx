import React, { FC } from 'react';
import { IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export type PaginationProps = {
  isLoading: boolean;
  currentPage: number;
  itemsCount: number;
  handlePage: (page: number) => void;
};

export const Pagination: FC<PaginationProps> = ({
  children,
  isLoading = false,
  itemsCount = 0,
  currentPage = 1,
  handlePage,
}) => {
  const handlePageNext = () => {
    if (itemsCount !== 0) handlePage(currentPage + 1);
  };

  const handlePagePrev = () => {
    if (currentPage > 1) handlePage(currentPage - 1);
  };

  return (
    <Box display="flex" width="100%" position="relative" px={5}>
      <Box display="flex" alignItems="center" position="fixed" top="50%" left={0} sx={{ transform: 'translateY(50%)' }}>
        <IconButton disabled={currentPage === 1} onClick={handlePagePrev}>
          <ArrowBackIosIcon />
        </IconButton>
      </Box>
      {isLoading ? (
        itemsCount > 0 ? (
          <Box display="flex">{children}</Box>
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
      <Box
        display="flex"
        alignItems="center"
        position="fixed"
        top="50%"
        right={0}
        sx={{ transform: 'translateY(50%)' }}
      >
        <IconButton disabled={!itemsCount} onClick={handlePageNext}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    </Box>
  );
};
