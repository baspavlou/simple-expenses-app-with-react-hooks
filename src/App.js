import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];

const App = () => {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState("");
    const [alert, setAlert] = useState({ show: false });
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);

    useEffect(() => {
        console.log("useeffect");
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);
    const handleChange = e => {
        const { name, value } = e.target;
        name === "charge" ? setCharge(value) : setAmount(value);
    };

    const handleAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 3000);
    };
    const handleSubmit = e => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {
            if (edit) {
                let tempExpenses = expenses.map(item => {
                    return item.id === id ? { ...item, charge, amount } : item;
                });
                setExpenses(tempExpenses);
                setEdit(false);

                handleAlert({
                    type: "success",
                    text: "Expense successfully edited"
                });
            } else {
                setExpenses([
                    ...expenses,
                    {
                        id: uuid(),
                        charge,
                        amount
                    }
                ]);

                handleAlert({
                    type: "success",
                    text: "Expense successfully inserted"
                });
            }
            setCharge("");
            setAmount("");
        } else {
            handleAlert({
                type: "danger",
                text: "Something went wrong"
            });
        }
    };
    //clear items

    const clearItems = () => {
        setExpenses([]);
        handleAlert({
            type: "danger",
            text: "All items deleted"
        });
    };
    const handleEdit = id => {
        let expense = expenses.find(item => item.id === id);
        let { charge, amount } = expense;
        setCharge(charge);
        setAmount(amount);
        setEdit(true);
        setId(id);
    };
    const handleDelete = id => {
        let newExpenses = expenses.filter(item => {
            return item.id !== id && item;
        });
        setExpenses(newExpenses);
        handleAlert({
            type: "danger",
            text: "Item deleted"
        });
    };

    return (
        <>
            {alert.show && <Alert type={alert.type} text={alert.text} />}
            <h1>Budget calculator</h1>
            <main className="App">
                <ExpenseForm
                    charge={charge}
                    amount={amount}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    edit={edit}
                />
                <ExpenseList
                    expenses={expenses}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    clearItems={clearItems}
                />
            </main>
            <h1>
                Total Spending :
                <span className="total">
                    $
                    {expenses.reduce(
                        (total, curr) => total + parseInt(curr.amount),
                        0
                    )}
                </span>
            </h1>
        </>
    );
};

export default App;
