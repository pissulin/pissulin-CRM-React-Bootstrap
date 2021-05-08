import React from 'react'
import "./Nav.css"
import MenuItem from './Menu-item'



export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/*Refatorar para componente os link*/}
            <MenuItem link="/" icon="home" label="Início"/>
            <MenuItem link="/users" icon="users" label="Usuários"/>
        </nav>
    </aside>