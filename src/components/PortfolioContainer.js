import React,{ useState } from "react";
import NavBar from './Navbar';
import HomePage from "./pages/Homepage";
import Protfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer(){
    const  [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if(currentPage ==='HomePage'){
            return <HomePage/>;
        }
        if(currentPage ==='Protfolio'){
            return <Protfolio/>;
        }
        return <Contact/>
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <NavBar currentPages={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}