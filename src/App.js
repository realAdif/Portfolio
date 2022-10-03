import React,{useEffect} from "react";
import PortfolioContainer from "./components/PortfolioContainer";


function App(){
    // This effect runs once, after the first render
    useEffect(() => {
        document.title = "Aditya PortFolio"
    }, [])
    return(
        <div>
            
            <PortfolioContainer />
        </div>
    )
}
export default App;