import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
    { id: uuid(), charge: "rent", amount: 1600 },
    { id: uuid(), charge: "car payment", amount: 500 },
    { id: uuid(), charge: "credit card", amount: 250 }
];
const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <>
            <Alert />
            <h1>Budget calculator</h1>
            <main className="App">
                <ExpenseForm />
                <ExpenseList expenses={expenses} />
            </main>
            <h1>
                Total Spending :
                <span className="total">
                    ${expenses.reduce((total, curr) => total + curr.amount, 0)}
                </span>
            </h1>
        </>
    );
};

export default App;
