import React from "react";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles({
  root: {
    marginTop: "2em",
    table: {
      minWidth: 650,
    },
  },
  heading: {
    marginBottom: "2rem",
  },
  container: {
    maxHeight: 440,
  },
});

function ExpenseTable({ items, deleteItem, checkedItem }) {
  const classes = useStyles();

  const formatAmount = (amount) => parseFloat(amount).toFixed(2);
  const formatDate = (date) => {
    const newDate = new Date(date.replace(/-/g, "/"));
    return new Intl.DateTimeFormat("en-US").format(newDate);
  };

  const rows = items.map(({ name, type, date, amount, checked }, index) => (
    <TableRow key={`${name}_${index}`}>
      <TableCell>
        <Checkbox
          checked={checked}
          color="primary"
          checkedIcon={<DeleteIcon />}
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={() => checkedItem(index)}
        />
      </TableCell>
      <TableCell> {type} </TableCell>
      <TableCell> {name} </TableCell>
      <TableCell> {formatDate(date)} </TableCell>
      <TableCell> ${formatAmount(amount)} </TableCell>
    </TableRow>
  ));

  return (
    <>
      <Typography variant="h5" className={classes.heading}>
        Expense Table
      </Typography>
      <Paper elevation={10}>
        <TableContainer>
          <Table
            size="small"
            aria-label="expense table"
            className={classes.table}
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox
                    disabled
                    checked
                    inputProps={{ "aria-label": "disabled checked checkbox" }}
                  />
                </TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{rows}</TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Button
        className={classes.root}
        variant="contained"
        color="secondary"
        onClick={deleteItem}
        type="button"
        startIcon={<DeleteIcon />}
      >
        Delete Expense
      </Button>
    </>
  );
}

export default ExpenseTable;