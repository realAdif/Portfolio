import React,{ useState } from "react";
import NavBar from './Navbar';
import HomePage from "./pages/Homepage";
import Protfolio  from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from './Footer'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

export default function PortfolioContainer(){
    const  [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if(currentPage ==='HomePage'){
            return <HomePage />;
        }
        if(currentPage === 'Portfolio'){
            return <Protfolio/>
        }
        return <Contact/>
        
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            <SwitchTransition>
                <CSSTransition
                timeout={300}
                classNames="page"
                unmountOnExit >
                {renderPage()}
                </CSSTransition>
            </SwitchTransition>
            
            <Footer/>
        </div>
    );
}