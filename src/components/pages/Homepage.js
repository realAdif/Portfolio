import React from "react";

const styles = {
    nav: {
      background: '#F79D65',
      height: '165px'
    },
    
};
export default function HomePage(){
    return(
        <div className="jumbotron jumbotron-fluid" style={styles.nav}>
            <div className="container">
                <h1 className="display-4">Wellcome</h1>
                <p className="lead">Portfolio of Aditya Gaikwad</p>
            </div>
        </div>
    )
}

 