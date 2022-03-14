import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import { useState } from 'react';

interface IAppProps {
    open: boolean,
    handleClose: any,
}

const DeleteDialog: React.FunctionComponent<IAppProps> = ({ open, handleClose }) => {
    const handleConfirmDelete = () => {
       
    }
  return (
    <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
            }}
        >
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to permanently delete this user account?
                </DialogContentText>
            </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>Cancel</Button>
                    <Button >Delete</Button>
                    </DialogActions>
        </Dialog>
  </>
  );
};

export default DeleteDialog;
