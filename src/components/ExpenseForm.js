import React from "react";
import { MdSend } from "react-icons/md";

const ExpenseList = () => {
    return (
        <form>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        placeholder="e.g. rent"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                        type="text"
                        className="form-control"
                        id="amount"
                        name="amount"
                        placeholder="e.g. 100"
                    />
                </div>
            </div>
            <button className="btn" type="submit">
                Submit
                <MdSend className="btn-icon" />
            </button>
        </form>
    );
};

export default ExpenseList;