import { Button, Typography, Card, Divider, TableContainer, Table, TableHead, TableRow, TableCell, Checkbox, TableBody, Avatar, Grid, Box, TablePagination } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from "react";
import UserData from '../../../UserData';
import DeleteIcon from '@mui/icons-material/Delete';

const data = UserData.map((item)=>{
  return {
    id: item.id,
    name: item.name,
    avatar: item.avatar,
    email: item.email,
    location: item.location,
    role: item.role,
    post: item.posts,
    jobtitle: item.jobtitle,
  }
})

export default function UserList() {
  const [data, setData] = useState(UserData);
  const handleDelete = (id: string) =>{
    setData(data.filter((item) => item.id !== id));
  }

  const columns: GridColDef[] = [
    { field: 'username', headerName: 'USER NAME', width: 150 },
    {
      field: 'name',
      headerName: 'NAME',
      renderCell: (params) =>{
        return (
          <div className='userListUser'>
            <img className='userListImg' src={params.row.avatar} alt='' />
            <div className='useCardUser'>
            <a href="#">
            {params.row.name}
            </a>
            <Typography>{params.row.jobtitle}</Typography>
            </div>
          </div>
        );
      },
      width: 300,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'EMAIL',
      width: 200,
    },
    {
      field: 'posts',
      headerName: 'POST',
      type: 'number',
      width: 100,
      editable: true,
    },
    {
      field: 'location',
      headerName: 'LOCATION',
      width: 200,
      editable: true,
    },
    {field: 'role', headerName:'ROLE', width: 150},
    {field: 'action', headerName: 'ACTION', width: 150, renderCell: (params)=>{
      return (
        <>
        <Button variant='contained'>view</Button>
        <Button onClick={()=>handleDelete(params.row.id)}>
          <DeleteIcon />
        </Button>
        </>
      )
    }}
   
  ];

  return (
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
              <TableCell align='left'>USER NAME</TableCell>
              <TableCell  align='left'>NAME</TableCell>
              <TableCell align='left'>EMAIL</TableCell>
              <TableCell align='left'>POST</TableCell>
              <TableCell align='left'>LOCATION</TableCell>
              <TableCell align='left'>ROLE</TableCell>
              <TableCell align='left'>ACTION</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((user)=>{
                return(
                  <TableRow
                  hover
                  key={user.id}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox />
                    </TableCell>
                    <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.username}
                    </Typography>
                    </TableCell>
                    {/* field name */}
                    <TableCell sx={{display:'flex', flexWrap: 'nowrap', justifyContent:'center'}}>
                      <Box sx={{display:'flex', my: 0}}>
                      <Avatar src={user.avatar} alt='' />
                      <Box sx={{marginLeft: 2}}>
                      <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.name}
                    </Typography>

                      <Typography
                      variant="subtitle1"
                      color="text.primary"
                      gutterBottom
                      noWrap
                      >
                      {user.jobtitle}
                      </Typography>
                      </Box>
                    </Box>
                    </TableCell>
                    <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.email}
                    </Typography>
                    </TableCell>
                    <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.posts}
                    </Typography>
                    </TableCell>
                    <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.location}
                    </Typography>
                    </TableCell>
                    <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {user.role}
                    </Typography>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
         </TableContainer>
         <Box p={2}>
      </Box>
    </Card>
  );
}