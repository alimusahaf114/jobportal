import { Children, createContext, useState } from "react";
export const jobsContext = createContext()
export const jobProvider = ({children})=>{
    const [search , setSearch] = useState("")
    return (
        <jobsContext.Provider value={{search,setSearch}}>
            {children}
        </jobsContext.Provider>
    )
}