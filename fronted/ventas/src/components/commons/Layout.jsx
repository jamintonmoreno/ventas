import React from 'react'

//Component
import Headerco from './Headerco';
import Menu from './Menu';

const Layout = () => {
    return ( 
        <div>
            <Headerco />
            <br />
            <div className="container">
                <div className="columns">
                    <div className="column is-one-quarter">
                        <Menu />        
                    </div>
                    <div className="column">
                       <p> Este es el contenido</p>
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Layout;