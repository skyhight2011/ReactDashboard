import DeleteIcon from '@mui/icons-material/Delete';
import LaunchIcon from '@mui/icons-material/Launch';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import type {} from '@mui/lab/themeAugmentation';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Divider,
  IconButton, InputAdornment, Tab, Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow, Tabs, TextField, Tooltip,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, FC, useState, SyntheticEvent } from 'react';
import { UserListData, UserStatus } from '../../models/user_model';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface UserListProps{
  className?: string;
  userList: UserListData[];
}

interface Filters {
  status?: UserStatus;
}

const LabelWrapper = styled('span')(({theme, color})=>({
  backgroundColor: color,
  borderRadius: 15,
  padding: theme.spacing(0.5, 1),
  fontSize: theme.typography.pxToRem(13),
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: theme.spacing(3),
}));

const SyledTableHeader = styled(TableCell)({
  fontFamily: " Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
  display: 'table-cell',
})

const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          height: 38,
          minHeight: 38,
          overflow: 'visible'
        },
        indicator: {
          height: 38,
          minHeight: 38,
          borderRadius: 6,
          border: '1px solid'
        },
        scrollableX: {
          overflow: 'visible !important'
        }
      }
  },
   MuiTab: {
    styleOverrides: {
      root: {
        padding: 0,
        height: 38,
        minHeight: 38,
        borderRadius: 6,
        transition: 'color .2s',
        textTransform: 'capitalize',

        '&.MuiButtonBase-root': {
          minWidth: 'auto',
          paddingLeft: 20,
          paddingRight: 20,
          marginRight: 4
        },
        '&.Mui-selected, &.Mui-selected:hover': {
          color: '#2196f3',
          zIndex: 5
        },
        '&:hover': {
          color: '#90caf9'
        }
      }
    }
  },
  }
});

const getStatusLabel = (status: string): JSX.Element => {
  const map = {
    admin: {
      text: 'Administrator',
      color: '#ff19431a'
    },
    subscriber: {
      text: 'Subscriber',
      color: '#33c2ff1a'
    },
    customer: {
      text: 'Customer',
      color: '#ffa3191a'
    }
  };

  const { color, text }: any = map[status as keyof typeof map];
  return <LabelWrapper color={color}>{text}</LabelWrapper>;
}

const applyFilters = (ListItem: UserListData[], filters: Filters): UserListData[] => {
  return ListItem.filter((items) => {
    let matches = true;
    if(filters.status && items.role !== filters.status) {
      matches = false;
    }
    return matches;
  });
};


const applyPagination = (
  userList: UserListData[],
  page: number,
  limit: number
): UserListData[] => {
  return userList.slice(page * limit, page * limit + limit);
};

const UserListTable: FC<UserListProps> =({ userList }) =>{
  const [selectedListUser, setSelectedListUser] = useState<string[]>([]);
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  const statusOptions  = [
    { value: 'all', label: 'All User' },
    { value: 'admin', label: 'Administrators' },
    { value: 'subscriber', label: 'Subcribers' },
    { value: 'customer', label: 'Customers' }
  ];

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const handleTabsChange = (e: SyntheticEvent, newValue: string): void =>{
    console.log(newValue);
    let value = null;
    if(newValue !== 'all')
    {
      value = newValue;
    }
    setFilters((prevFilters) => (
      {
      ...prevFilters,
      status: value,
    }));
  }

  const handleSelectOneUser=(e: ChangeEvent<HTMLInputElement>, userListId: string): void =>{
    if(!selectedListUser.includes(userListId))
    {
      setSelectedListUser((prevSelected)=> [...prevSelected, userListId]);
    } else {
      setSelectedListUser((prevSelected) => prevSelected.filter((id) => id !== userListId));
    }
  }

  const handleSelectAllListUser = (e: ChangeEvent<HTMLInputElement>):void =>{
    setSelectedListUser(
      e.target.checked
        ? userList.map((userList) => userList.id)
        : []
    );
  }
  console.log(filters);
  
  const filteredUserList = applyFilters(userList, filters);
  console.log(filteredUserList);

  const paginatedUserlist = applyPagination(filteredUserList, page, limit);
  console.log(paginatedUserlist);

  const selectedAllUser = selectedListUser.length === userList.length;

  const selectedSomeUser = selectedListUser.length > 0 && selectedListUser.length < userList.length;

   return (
    <ThemeProvider theme={theme}>
      <Box
      sx={{width: '100%'}}
        display="flex"
        justifyContent="space-between"
        alignContent='center'
      >
        <Tabs
          variant='scrollable'
          scrollButtons="auto"
          textColor="primary"
          indicatorColor="primary"
          value={filters.status || 'all'}
          onChange={handleTabsChange}
        >
          {statusOptions.map((statusOption) => (
                <Tab key={statusOption.value} label={statusOption.label} value={statusOption.value} />
              ))}
        </Tabs>
      </Box>
    <Card>
        <Box
          sx={{ pt: 1, pb: 1 }}
          display="flex"
          justifyContent="space-between"
          alignContent='center'
        >
        <TextField
        sx={{ mx:'10px', my: 1 }}
        size="small"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          )
        }}
        placeholder="Search..."
      />
        </Box>
         <Divider />
         <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">  
                  <Checkbox 
                    color='primary'
                    indeterminate={selectedSomeUser}
                    checked={selectedAllUser}
                    onChange={handleSelectAllListUser}
                  />
                </TableCell>
                <SyledTableHeader align='left'>USER NAME</SyledTableHeader>
                <SyledTableHeader  align='left'>NAME</SyledTableHeader>
                <SyledTableHeader align='left'>EMAIL</SyledTableHeader>
                <SyledTableHeader align='left'>POST</SyledTableHeader>
                <SyledTableHeader align='left'>LOCATION</SyledTableHeader>
                <SyledTableHeader align='left'>ROLE</SyledTableHeader>
                <SyledTableHeader align='left'>ACTION</SyledTableHeader>
              </TableRow>
            </TableHead>

            <TableBody>
              {paginatedUserlist.map((user: any)=>{
                const isUserSelected = selectedListUser.includes(user.id);
                return (
                 <TableRow
                  hover
                  key={user.id} 
                 >
                  <TableCell padding='checkbox'>
                     <Checkbox
                      color='primary'
                      checked={isUserSelected}
                      onChange={(e: ChangeEvent<HTMLInputElement>, ) => handleSelectOneUser(e, user.id)}
                      value={isUserSelected}
                    />
                  </TableCell>
                   <TableCell >
                     <Typography>{user.username}</Typography>
                   </TableCell>
                   <TableCell >
                     <Box display='flex'>
                          <Avatar sizes='small' src={user.avatar} alt={user.name} />
                       <Box sx={{marginLeft: 2}}>
                          <Typography
                             variant="body1"
                             fontWeight="bold"
                             color="#5569ff"
                             gutterBottom
                             noWrap
                             lineHeight={1.57}
                          >{user.name}</Typography>
                          <Typography
                          variant="subtitle1"
                          color="text.primary"
                          noWrap
                          >{user.jobtitle}</Typography>
                       </Box>
                     </Box>
                     </TableCell>
                   <TableCell>{user.email}</TableCell>
                   <TableCell>{user.posts}</TableCell>
                   <TableCell>
                     <Typography display='flex' noWrap>
                       {user.location}
                       </Typography>
                     </TableCell>
                   <TableCell>
                     {getStatusLabel(user?.role)}
                   </TableCell>
                   <TableCell>
                     <Box sx={{display:'flex', flexWrap:'nowrap'}}>
                        <Tooltip title='View User' arrow>
                            <IconButton>
                            <LaunchIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Delete User' arrow>
                            <IconButton>
                            <DeleteIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                     </Box>
                   </TableCell>
                 </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box p={2}>
        <TablePagination
          component="div"
          count={filteredUserList.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
    </ThemeProvider>
  );
}

export default UserListTable;