import React, { useState } from "react";

const AlertHook = () => {
    const [alert, setAlert] = useState({ show: false });

    const showAlert = ({ type, text }) => {
        setAlert({ show: true, type, text });
        setTimeout(() => {
            setAlert({ show: false });
        }, 3000);
    };
    return { alert, showAlert };
};

export default AlertHook;
