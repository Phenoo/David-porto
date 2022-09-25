import {createContext, useContext} from "react";



const MyContext = createContext();

export const MyContextState = ({children}) => {
  return (
    <MyContext.Provider
    value={``}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext);