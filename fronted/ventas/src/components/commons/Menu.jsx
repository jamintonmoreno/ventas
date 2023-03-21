import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <div>
            <nav className='panel'>
                <p className='panel-heading'> Menu</p>
                <div className="panel-block">
                    <Link to='/' className='button is-fullwidth'>
                        <span className='icon'>
                        <i className='fas fa-home'></i>
                        </span>
                        <span>
                            Inicio
                        </span>
                    </Link>
                    
                </div>
                <div className="panel-block">
                    <Link to='/clientes' className='button is-fullwidth'>
                        <span className='icon'>
                        <i className='fas fa-user'></i>
                        </span>
                        <span>
                            Cliente
                        </span>
                    </Link>
                    
                </div>
            </nav>
        </div>
     );
}
 
export default Menu;