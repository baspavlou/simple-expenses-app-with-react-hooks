import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
import StyledExpenseItem from "./styledComponents/StyledExpenseItem";
import StyledButton from "./styledComponents/StyledButton";
import StyledList from "./styledComponents/StyledList";
const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
    return (
        <>
            <StyledList className="list">
                {expenses.map(expense => (
                    <StyledExpenseItem key={expense.id}>
                        <ExpenseItem
                            expense={expense}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    </StyledExpenseItem>
                ))}
            </StyledList>
            {expenses.length > 0 && (
                <StyledButton onClick={clearItems}>
                    Reset Expenses <MdDelete />
                </StyledButton>
            )}
        </>
    );
};

export default ExpenseList;
