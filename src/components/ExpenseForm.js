import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({ charge, amount, handleChange, handleSubmit, edit }) => {
    return (
        <form>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        placeholder="e.g. rent"
                        value={charge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                        onChange={handleChange}
                        type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        placeholder="e.g. 100"
                        value={amount}
                    />
                </div>
            </div>
            <button className="btn" type="submit" onClick={handleSubmit}>
                {!edit ? "Submit" : "Edit"}
                <MdSend className="btn-icon" />
            </button>
        </form>
    );
};

export default ExpenseForm;
