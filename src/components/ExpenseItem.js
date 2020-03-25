import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
    const { id, charge, amount } = expense;
    return (
        <>
            <div className="info">
                <span className="expense">{charge}</span>
            </div>
            <div>
                <span className="amount">${amount}</span>
                <button
                    className="edit-btn"
                    aria-label="edit button"
                    onClick={() => handleEdit(id)}
                >
                    <MdEdit />
                </button>
                <button
                    className="clear-btn"
                    aria-label="delete button"
                    onClick={() => handleDelete(id)}
                >
                    <MdDelete />
                </button>
            </div>
        </>
    );
};

export default ExpenseItem;
