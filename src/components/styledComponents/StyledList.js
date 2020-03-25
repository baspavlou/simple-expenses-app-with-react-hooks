import styled from "styled-components";

const StyledList = styled.ul`
    margin: 2rem 0.75rem 0 0.75rem;
    list-style-type: none;
    border: none;
    padding: 0;
    @media screen and (min-width: 601px) {
        width: 85%;
        margin: 2rem auto 0 auto;
    }
    @media screen and (min-width: 993px) {
        width: 70%;
        margin: 2rem auto 0 auto;
    }
`;
export default StyledList;
