import React from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import SimpleMap from './GoogleMap';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox() {
  const [open, setOpen] = React.useState(false);
 React.useEffect(()=>
 {
    setTimeout(() => setOpen(true), 4000);
 })
 
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Aniversary Invitation"}</DialogTitle>
        <DialogContent>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container>
        <Grid item xs={5}><div className='inivation_colour'><span className='inivation_colour_span'>..You are Co ordially invited in the Wedding Annivarsary of Debabrata & Pritha</span></div>
        <div className='venue_colour'><span className='venue_colour_span'>Venue: Green Inn Banquet,7, Rafi Ahmed Kidwai Rd, near crown cinema, Janbazar, Taltala, Kolkata, West Bengal 700013 </span></div> </Grid>
        <Grid item xs={7}><SimpleMap/></Grid>
        </Grid>
        </Box>
        </DialogContent>
        <DialogActions>
        </DialogActions>
      </Dialog>
    </div>
  );
}


