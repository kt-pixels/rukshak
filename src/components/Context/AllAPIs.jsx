import { createContext, useContext, useState } from "react";

export const ClickContext = createContext();

export function useClick() {
    return useContext(ClickContext);
}

export function ClickProvider({children}){
    const [transform, setTransform] = useState('scale(0)')
    const [translateX, setTranslateX] = useState('translateX(-300px)')

  const scale1 = () => {
    if(transform === 'scale(0)'){
      setTransform('scale(1)')
    }
  }

  const scale0 = () => {
    if(transform === 'scale(1)'){
      setTransform('scale(0)')
    }
  }

  const transX300 = () => {
    if(translateX === 'translateX(-300px)'){
      setTranslateX('translateX(0)')
    }
  }
  const transX0 = () => {
    if(translateX === 'translateX(0)'){
      setTranslateX('translateX(-300px)')
    }
  }


  return(
    <ClickContext.Provider value={{transform, scale0, scale1, transX300, transX0}}>
        {children}
    </ClickContext.Provider>
)
}