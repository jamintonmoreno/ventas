import React from 'react'
import { Link} from 'react-router-dom';

const Headerco = () => {
    return (  
        <div className="navbar is-primary">
            <div className="navbar-brand">
                <Link to="/" className='navbar-item'>
                    <img src='' alt='Logo'/>
                </Link>
            </div>
        </div>
    );
}
 
export default Headerco;