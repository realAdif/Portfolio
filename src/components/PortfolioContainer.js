import React,{ useState} from "react";
import NavBar from './Navbar';
import HomePage from "./pages/Homepage";
import Protfolio  from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from './Footer'
import Resume from "./pages/Resume";
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
        if(currentPage === 'Contact'){
            return <Contact/>
        }
        return <Resume/>
        
    }
    return(
        <div>
            
            <NavBar currentPage={currentPage} handlePageChange={setCurrentPage} />
            {renderPage()}
            <Footer/>
        </div>
    );
}