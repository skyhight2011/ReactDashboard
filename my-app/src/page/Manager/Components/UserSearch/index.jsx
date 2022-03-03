import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import { InputAdornment, TextField } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import * as React from 'react';
import { useState } from 'react';

const SearchInput = styled(TextField)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginBottom: theme.spacing(2),
  borderRadius: '50px',
}));
export default function UserSearch() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <SearchInput
        value={searchValue}
        autoFocus={true}
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search by name, email or username..."
        fullWidth
      />
    </>
  );
}
