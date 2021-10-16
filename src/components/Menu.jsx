import React from 'react'
import '../css/Style.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'



const Menu = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const logout=()=>{
        dispatch({
            type: 'SET_USER',
            payload: false
        })
    }

    return (
        <header>
            <nav className="menu">
                <ul className="list-menu">
                   {user &&
                     <a onClick={logout}>logout</a>
                   
                   }
                </ul>
            </nav>
        </header>
    )
}

export default Menu;