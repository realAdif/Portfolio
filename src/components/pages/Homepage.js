import React from "react";

const styles = {
    background: {
      background: '#F79D65',
      height: '130px'
    },
    
};
export default function HomePage(){
    return(
        <div className="jumbotron jumbotron-fluid" style={styles.background}>
            <div className="container">
                <h1 className="display-4">Wellcome</h1>
                <p className="lead">Portfolio of Aditya Gaikwad</p>
            </div>
        </div>
    )
}

 