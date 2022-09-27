/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const styles = {
    background: {
      background: '#F7B267',
      hight: '200px'
    },
    
};
function Navbar({currentPages, handlePageChange}){
    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-light" style={styles.background}>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li className="nav-item active">
                        <a href='#HomePage' onClick={()=> handlePageChange('HomePage')} className="nav-link">Home</a>
                    </li>

                    <li className="nav-item">
                        <a href='#Portfolio' onClick={()=> handlePageChange('Portfolio')} className="nav-link">Portfolio</a>
                    </li>

                    <li className="nav-item">
                        <a href='#Contact' onClick={()=> handlePageChange('Contact')} className="nav-link">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;