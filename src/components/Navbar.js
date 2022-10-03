/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/Navbar.css'

function Navbar({currentPages, handlePageChange}){
    return(
        <div >
            <nav className="navbar navbar-expand-lg navbar-light background">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                    <li className={currentPages === 'HomePage' ? 'nav-link active' : 'nav-link'}>
                        <a href='#HomePage' onClick={()=> handlePageChange('HomePage')} className="nav-link">ABOUT-ME</a>
                    </li>

                    <li className={currentPages === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
                        <a href='#Portfolio' onClick={()=> handlePageChange('Portfolio')} className="nav-link">PORTFOLIO</a>
                    </li>

                    <li className={currentPages === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        <a href='#Contact' onClick={()=> handlePageChange('Contact')} className="nav-link">CONTACT</a>
                    </li>

                    <li className={currentPages === 'Contact' ? 'nav-link active' : 'nav-link'}>
                        <a href='#Resume' onClick={()=> handlePageChange('Resume')} className="nav-link">RESUME</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;