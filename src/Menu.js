import React from 'react'
import { useGeneralContext } from './context'
import MenuItem from './MenuItem'
const Menu = () => {
    const {menuItems} = useGeneralContext()
  return (
    <div className='section-center'>
        {menuItems.map((menu)=>{
            return(
                <MenuItem key={menu.id} {...menu}/>
            )
        })}
    </div>
  )
}

export default Menu