import styled from "styled-components";

const StyledButton = styled.button`
    text-decoration: none;
    color: var(--mainWhite);
    background-color: var(--primaryColor);
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 14px;
    outline: 0;
    border: none;
    border-radius: 8px;
    display: block;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-transform: uppercase;
    margin: 0 auto;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    display: flex;
    align-items: center;
    &:hover {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25),
            0 2px 10px rgba(0, 0, 0, 0.22);
    }
    svg {
        font-size: 1.2rem;
        margin-left: 0.75rem;
    }
`;
export default StyledButton;
