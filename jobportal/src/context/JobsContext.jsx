import { Children, createContext, useState } from "react";
export const JobsContext = createContext()
export const JobProvider = ({children})=>{
    const [search , setSearch] = useState("")
    return (
        <JobsContext.Provider value={{search,setSearch}}>
            {children}
        </JobsContext.Provider>
    )
}