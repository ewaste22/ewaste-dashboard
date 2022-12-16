import React, { useState } from "react";
import { Link } from "react-router-dom";



const SubMenu = ({item}) => {
    const [subNav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subNav)
    return (
        <>
        <Link to={item.path}  onClick={item.subNav && showSubnav} >
            <div className="flex">
              <div className="mr-2 text-2xl">{item.icon}</div>  
              <div className="text-lg font-bold">{item.title}</div>
              <div className="ml-auto text-2xl"> {item.subNav && subNav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
                </div>
            </div>
               
            
        </Link>
        {subNav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index}>
            <div className="mr-2 text-2xl">{item.icon}</div>  
              <div className="text-lg font-bold">{item.title}</div>
            </Link>
          );
        })}
        </>
    )
}

export default SubMenu;