import React from "react";
import StyledAlert from "../styledComponents/StyledAlert";

const Alert = ({ type, text }) => {
    return <StyledAlert className={`alert alert-${type}`}>{text}</StyledAlert>;
};

export default Alert;
