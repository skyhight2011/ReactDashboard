import { Button, Typography, Card } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from "react";
import UserData from '../../../UserData';
import './userList.scss';
import DeleteIcon from '@mui/icons-material/Delete';

export default function UserList() {
  const [data, setData] = useState(UserData);

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
      editable: true,
    },
    {
      field: 'post',
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
        <Button>
          <DeleteIcon />
        </Button>
        </>
      )
    }}
   
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}