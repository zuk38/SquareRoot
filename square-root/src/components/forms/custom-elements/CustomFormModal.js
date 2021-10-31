import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SelectDropdown from './SelectDropdown'
import CustomFormLabel from './CustomFormLabel';
import { Typography} from '@mui/material';


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [value, setValue] = React.useState(null);


  return (
    <div>
      <Button
            variant="contained"
            size="large"
            color="secondary"
            sx={{
              pt: '13px',
              pb: '13px',
              display: 'block',
              width: '100%',
              borderRadius: '9px',
            }}
            onClick={handleClickOpen}
          >
            {props.title}
          </Button>
  
      <Dialog open={open} onClose={handleClose}  xs = {{ 
           padding: '25px'
            
            }}>
      
      <DialogTitle>
        <Typography
          fontWeight="700"
          sx={{
            marginBottom: '0',
            marginLeft: 20,
            marginRight: 20,
            marginTop: 3,
          }}
          gutterBottom
        >
          {props.title}
        </Typography>
      </DialogTitle>

        <DialogContent>
        <CustomFormLabel htmlFor="demo-simple-select">{props.formLabel1}</CustomFormLabel>
        <SelectDropdown/>
        <CustomFormLabel htmlFor="demo-simple-select">{props.formLabel2}</CustomFormLabel>
        <SelectDropdown/>
        </DialogContent>
        <DialogActions
          sx = {{
            margin: 2
          }}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
              {props.title}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
