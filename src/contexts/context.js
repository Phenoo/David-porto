import { useEffect } from "react";
import { createContext, useContext} from "react";
const MyContext = createContext();

export const MyContextState = ({children}) => {
  
  useEffect(() => {
  }, [])
  return (
    <MyContext.Provider
    value={``}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext);