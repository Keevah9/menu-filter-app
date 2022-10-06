import React, {useState, useContext} from 'react'
import menu from './data'
const AppContext = React.createContext()
const AppProvider =({children})=>{
    const allCategories = [
      "all",
      ...new Set(menu.map((item) => item.category)),
    ];
    const [menuItems, setMenuItems] = useState(menu)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category)=>{
        if(category === 'all'){
            setMenuItems(menu)
            return;
        }
        const newItems = menu.filter((item)=> item.category === category
        )
        setMenuItems(newItems)
    }
    return(
        <AppContext.Provider
            value={{
                menuItems, setMenuItems,categories,setCategories, filterItems, allCategories
            }}
        >
            {children}
        </AppContext.Provider>
    )
}   

export const useGeneralContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}