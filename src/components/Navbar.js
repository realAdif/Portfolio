/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const styles = {
    background: {
      background: '#F7B267',
      hight: '200px'
    },
    
};
function Navbar(){
    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-light" style={styles.background}>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Portfolio</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;