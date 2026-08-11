import { Children, createContext, useState } from "react";
export const JobsContext = createContext()
export const JobProvider = ({children})=>{
    const [search , setSearch] = useState("")
    const [typeFilter , setTypeFilter] = useState([])
    const [category , setCategory] = useState("")
    const [location , setLocation] = useState("")
    console.log(typeFilter);
    console.log(category);
    
    return (
        <JobsContext.Provider value={{location , setLocation , search , setSearch , typeFilter , setCategory , setTypeFilter, category}}>
            {children}
        </JobsContext.Provider>
    )
}