import styled from "styled-components";

const StyledAlert = styled.div`
    padding: 0.55rem 1.25rem;
    color: white;
    text-align: center;
    text-transform: capitalize;
    position: absolute;
    width: 90%;
    left: 5%;
    top: 5px;
    margin: 0 auto;
    border-radius: 2px;
    text-transform: capitalize;
    @media screen and (min-width: 601px) {
        width: 84%;
        left: 13%;
    }
    @media screen and (min-width: 993px) {
        width: 70%;
        left: 15%;
    }
`;

export default StyledAlert;
