import React,{ useState } from "react";
import NavBar from './Navbar';
import HomePage from "./pages/Homepage";

export default function PortfolioContainer(){
    const  [currentPage, setCurrentPage] = useState('HomePage');

    const renderPage = () => {
        if(currentPage ==='HomePage'){
            return <HomePage />;
        }
        
    }
    const handlePageChange = (page) => setCurrentPage(page);
    return(
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}