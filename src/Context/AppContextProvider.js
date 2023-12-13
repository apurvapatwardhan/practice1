/* eslint-disable react/prop-types */
import { createContext } from "react"


export const AppContext = createContext();

function AppContextProvider({children}) {

  const value = {name:"Apurva", surname:"Patwardhan"}
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
