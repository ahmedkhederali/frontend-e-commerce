import { createContext, useState, useContext } from "react";


const ColorContext = createContext();

export const ColorProvider = ({ children }) => {

    
    
    const [color, setColor] = useState("facebook.800");
    
    const values = {
        color, setColor
    }

    return <ColorContext.Provider value={values} >{children}</ColorContext.Provider>
};

export const useColorContext = () => useContext(ColorContext);