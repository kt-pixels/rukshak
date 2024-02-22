import { createContext, useContext, useState } from "react";

export const ClickContext = createContext();

export function useClick() {
    return useContext(ClickContext);
}

export function ClickProvider({children}){
    // Font size increase , normal or decrease functions

    const [font, setFont] = useState(12)

    const increase = () => {
        if(font < 40){
            setFont(font + 2)
        }
    }

    const decrease = () => {
        if(font > 10){
            setFont(font - 2)
        }
    }

    const normal = () => {
        setFont(12)
    }

  return(
    <ClickContext.Provider value={{increase, decrease, normal, font}}>
        {children}
    </ClickContext.Provider>
)
}