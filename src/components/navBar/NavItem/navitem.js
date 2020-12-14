import classes from './navitem.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItem = (props) => {
    return ( 
        <li className={classes.Li}>
            <NavLink to={props.link}>{props.name}</NavLink>
        </li>
     );
}
 
export default navItem;