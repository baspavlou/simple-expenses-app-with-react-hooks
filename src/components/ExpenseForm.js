import React from "react";
import { MdSend } from "react-icons/md";
import StyledButton from "./styledComponents/StyledButton";
import StyledInput from "./styledComponents/StyledInput";

const ExpenseForm = ({ charge, amount, handleChange, handleSubmit, edit }) => {
    return (
        <form>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <StyledInput
                        onChange={handleChange}
                        type="text"
                        autoComplete="off"
                        id="charge"
                        name="charge"
                        placeholder="e.g. rent"
                        value={charge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <StyledInput
                        onChange={handleChange}
                        type="number"
                        autoComplete="off"
                        id="amount"
                        name="amount"
                        placeholder="e.g. 100"
                        value={amount}
                    />
                </div>
            </div>
            <StyledButton type="submit" onClick={handleSubmit}>
                {!edit ? "Submit" : "Edit"}
                <MdSend />
            </StyledButton>
        </form>
    );
};

export default ExpenseForm;
