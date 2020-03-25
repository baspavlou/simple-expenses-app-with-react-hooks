import styled from "styled-components";

const StyledExpenseItem = styled.li`
    padding: 10px 20px;
    margin-bottom: 1rem;
    border-bottom: 2px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    div,
    button {
        display: flex;
        align-items: center;
    }
    button {
        border: 1px solid gray;
        border-radius: 6px;
        box-shadow: 0px 0px 2px gray;
        padding: 6px;
        margin-left: 10px;
    }
    .expense {
        margin-right: 2rem;
        text-align: left;
        text-transform: capitalize;
    }
    .amount {
        font-weight: 300;
        font-size: 14px;
        color: #fff9fa;
        background-color: var(--primaryColor);
        border-radius: 40px;
        padding: 0.5px 7px;
    }
    .clear-btn {
        color: red;
    }
    .edit-btn {
        color: green;
    }
`;

export default StyledExpenseItem;
