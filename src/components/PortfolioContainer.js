import React,{ useState} from "react";
import NavBar from './Navbar';
import HomePage from "./pages/Homepage";
import Protfolio  from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from './Footer'
import '../styles/page.css'


export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('HomePage');
    const renderPage = () => {
        if(currentPage ==='HomePage'){
            return <HomePage/>;
        }
        if(currentPage === 'Portfolio'){
            return <Protfolio/>
        }
        return <Contact/>
        
    }
    return(
        <div>
            
            <NavBar currentPage={currentPage} handlePageChange={setCurrentPage} />
            {renderPage()}
            <Footer/>
        </div>
    );
}