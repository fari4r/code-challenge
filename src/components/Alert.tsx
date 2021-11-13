import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface AlertProps {
    onDeleteRecord: () => void,
}
const Alert = ({ onDeleteRecord }: AlertProps) => {
    const [open, setOpen] = React.useState(false);
    const [alertInput, setAlertInput] = React.useState<string>("");
    const [show, setShow] = React.useState(false);

    function handleClickOpen() {
        setOpen(true);
    };

    function handleClose() {
        setOpen(false);
    };
    function handleِDeleteRecord() {
        onDeleteRecord();
        setOpen(false);


    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAlertInput(e.target.value);
        if (e.target.value === 'تایید')
            setShow(true);
        else
            setShow(false);

    }
    return (
        <div>
            <Button variant="contained" color="error" onClick={handleClickOpen}>
                حذف
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>حذف رکورد</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        برای حذف رکورد کلمه ی تایید را تایپ کنید.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={alertInput}
                        onChange={handleChange}

                    />
                </DialogContent>
                <DialogActions>
                    <Button style={{ marginLeft: '10px' }} onClick={handleClose} variant="contained" color="primary">انصراف</Button>
                    <Button disabled={show ? false : true} onClick={handleِDeleteRecord} variant="contained" color="error">حذف</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Alert;