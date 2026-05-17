import { useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    return (
        <Context.Provider value={{ theme: theme, setTheme: setTheme }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
