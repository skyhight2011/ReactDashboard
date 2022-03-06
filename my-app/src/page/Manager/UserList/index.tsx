import { CheckBox, TableRows } from '@mui/icons-material';
import { Avatar, Box, Card, Checkbox, createTheme, Divider, IconButton, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import * as React from 'react';
import UserData from '../../../UserData';
import LaunchIcon from '@mui/icons-material/Launch';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { FC, ChangeEvent, useState } from 'react';



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
});


const data = UserData.map((item)=>{
  return {
    id: item.id,
    username: item.username,
    name: item.name,
    avatar: item.avatar,
    email: item.email,
    location: item.location,
    role: item.role,
    post: item.posts,
    jobtitle: item.jobtitle,
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

export default function UserList() {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);

  const handlePageChange = (event: any, newPage: number):void =>{
    setPage(newPage);
  }

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void =>{
    setLimit(parseInt(event.target.value));
  }
   return (
    <ThemeProvider theme={theme}>
    <Card>
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
              {data.map((user)=>{
                return (
                 <TableRow
                 key={user.id}>
                   <TableCell>
                     <CheckBox
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
                   <TableCell>{user.post}</TableCell>
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
        <Box p={2} sx={{display:'flex', flexDirection: 'row-reverse'}}>
          <TableFooter>
            <TableRow>
              <TablePagination
                component='div'
                page={page}
                rowsPerPage={limit}
                count={data.length}
                rowsPerPageOptions={[5, 10, 25, 30]}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
              />
            </TableRow>
          </TableFooter>
        </Box>        
    </Card>
    </ThemeProvider>
  );
}