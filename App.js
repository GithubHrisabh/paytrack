import React, { useState, useEffect } from "react";

import ExpenseForm from "./ExpenseForm";
import ExpenseTable from "./ExpenseTable";
import Header from "./Header";

import Container from "@material-ui/core/Container";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

import "./App.css";


const App = () => {
  const [inputs, setInputs] = useState({
    name: "",
    type: "",
    date: "",
    amount: "",
  });

  const [expense, setExpense] = useState([]);
  const [theme, setTheme] = useState(true);

  const useStyles = makeStyles({
    paper: {
      height: "100vh",
    },
  });

  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  const lightTheme = createTheme({
    palette: {
      type: "light",
    },
  });

  useEffect(() => {
    const expenses = JSON.parse(localStorage.getItem("expenses"));
    expenses && setExpense(expenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense));
  }, [expense]);

  const toggleTheme = createTheme(theme ? lightTheme : darkTheme);
  const icon = !theme ? <Brightness7Icon /> : <Brightness4Icon />;
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...inputs };
    setExpense([...expense, newExpense]);
    setInputs({
      name: "",
      type: "",
      date: "",
      amount: "",
    });
    localStorage.setItem("expenses", JSON.stringify(expense));
  };

  const handleThemeChange = () => setTheme(!theme);

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleCheck = (index) => {
    const items = [...expense];
    const item = items[index];
    item.check = !item.check;
  };

  const deleteExpense = () => {
    const newExpenseList = expense.filter((expense) => !expense.check);
    setExpense(newExpenseList);
  };

  return (
    <div className="App">
      <CssBaseline />
      <ThemeProvider theme={toggleTheme}>
        <Paper className={classes.paper}>
          <Container maxWidth="lg">
            <Header icon={icon} change={handleThemeChange} theme={theme} />
            
            <ExpenseForm
              submit={handleSubmit}
              inputs={inputs}
              change={onChange}
            />
            <ExpenseTable
              items={expense}
              checkedItem={handleCheck}
              deleteItem={deleteExpense}
            />
            

          
          </Container>
          
              
            
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;