import React from "react";

const ExpenseList = ({ type, text }) => {
    return <div className={`alert alert-${type}`}>{text}</div>;
};

export default ExpenseList;
