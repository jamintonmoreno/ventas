import React from 'react'

const Menu = () => {
    return ( 
        <div>
            <nav className='panel'>
                <p className='panel-heading'> Menu</p>
                <div className="panel-block">
                    <a href='/' className='button is-fullwidth'>
                        <span className='icon'>
                        <i className='fas fa-home'></i>
                        </span>
                        <span>
                            Inicio
                        </span>
                    </a>
                    
                </div>
                <div className="panel-block">
                    <a href='/' className='button is-fullwidth'>
                        <span className='icon'>
                        <i className='fas fa-user'></i>
                        </span>
                        <span>
                            Cliente
                        </span>
                    </a>
                    
                </div>
            </nav>
        </div>
     );
}
 
export default Menu;