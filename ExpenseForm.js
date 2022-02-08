import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";



const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "30ch",
    },
  },
  heading: {
    marginBottom: "2rem",
  },
}));

const ExpenseForm = ({ inputs, change, submit }) => {
  const { name, amount, type, date } = inputs;

  const classes = useStyles();

  return (
    <form onSubmit={submit} className={classes.root}>
      <Typography variant="h2" className={classes.heading}>
        Expense Tracker
      </Typography>
      <Typography variant="h5" className={classes.heading}>
        Expense Form
      </Typography>
      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Expense Name"
            variant="outlined"
            name="name"
            type="text"
            value={name}
            onChange={(e) => change(e)}
            required
            size="small"
          />
        </Grid>

        <Grid item>
          <TextField
            id="outlined-select-currency"
            select
            label="Payment Method"
            name="type"
            value={type}
            onChange={(e) => change(e)}
            variant="outlined"
            size="small"
          >
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="Debit Card">Debit Card</MenuItem>
            <MenuItem value="Apple Pay">Apple Pay</MenuItem>
            <MenuItem value="Google Pay">Google Pay</MenuItem>
            <MenuItem value="Venmo">Venmo</MenuItem>
            <MenuItem value="PayPal">PayPal</MenuItem>
          </TextField>
        </Grid>

        <Grid item>
          <TextField
            variant="outlined"
            type="date"
            name="date"
            value={date}
            onChange={(e) => change(e)}
            required
            size="small"
          />
        </Grid>

        <Grid item>
          <TextField
            id="outlined-basic"
            label="Expense Amount"
            variant="outlined"
            name="amount"
            type="number"
            min="0"
            value={amount}
            onChange={(e) => change(e)}
            required
            size="small"
          />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
          >
            Add Expense to Track
          </Button>
          
        </Grid>
        <Grid item>
          <Button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href='https://rzp.io/l/XieEy618a';
              }}
            variant="contained"
            color="primary"
            
            endIcon={<SendIcon />}
          >
            Make Payment Online
          </Button>
          
        </Grid>
        
      </Grid>
      
    </form>
  );
};

export default ExpenseForm;
