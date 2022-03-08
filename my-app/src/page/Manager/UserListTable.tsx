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
  TableRow, Tabs, TextField, Tooltip,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ChangeEvent, FC, useState } from 'react';
import { UserListData } from '../../models/user_model';
import { ThemeProvider, createTheme } from '@mui/material/styles';




interface UserListProps{
  className?: string;
  userList: UserListData[];
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


const getStatusLabel = (role: string): JSX.Element => {
  const map = {
    admin: {
      text: 'Administrator',
      color: '#ff19431a'
    },
    subscriber: {
      text: 'Customer',
      color: '#33c2ff1a'
    },
    customer: {
      text: 'Subscriber',
      color: '#ffa3191a'
    }
  };

  const { color, text }: any = map[role as keyof typeof map];
  return <LabelWrapper color={color}>{text}</LabelWrapper>;
}

const UserListTable: FC<UserListProps> =({ userList }) =>{
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [currentTab, setCurrentTab] = useState<string>('all');

  const status = [
    { value: 'all', label: 'All User' },
    { value: 'admin', label: 'Administrators' },
    { value: 'subcriber', label: 'Subcribers' },
    { value: 'customer', label: 'Customers' }
  ];

  const handleTabChange = (e: React.SyntheticEvent, newStatus: string): void =>{
    console.log(newStatus);
    setCurrentTab(newStatus);
  }

  const handlePageChange = (event: any, newPage: number):void =>{
    setPage(newPage);
  }

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    setLimit(parseInt(event.target.value));
  }
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
          value={currentTab}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          {status.map((status) => (
                <Tab key={status.value} label={status.label} value={status.value} disableFocusRipple />
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
              {userList.map((user: any)=>{
                return (
                 <TableRow
                  hover
                  key={user.id} 
                 >
                  <TableCell padding='checkbox'>
                     <Checkbox
                      color='primary'
                    />
                  </TableCell>
                   <TableCell>
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
    </Card>
    </ThemeProvider>
  );
}

export default UserListTable;