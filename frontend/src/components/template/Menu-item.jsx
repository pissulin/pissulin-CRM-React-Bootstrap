import React from 'react'
import "./Menu-item.css"
import {Link} from 'react-router-dom'
export default props => 
    <Link className="link" to={`${props.link}`}>
        <i className={`fa fa-${props.icon}`}><span className="label">{props.label}</span></i>
    </Link>
