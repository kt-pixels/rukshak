import { createContext, useContext, useState } from "react";

export const ClickContext = createContext();

export function useClick() {
    return useContext(ClickContext);
}

export function ClickProvider({children}){
    

  return(
    <ClickContext.Provider value={{}}>
        {children}
    </ClickContext.Provider>
)
}