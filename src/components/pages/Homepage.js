import React from "react";

const styles = {
    background: {
        background: '#F79D65',
        height: '130px',
        
    },
    text:{
        textAlign: 'center'
    },
    
};
export default function HomePage(){
    return(
        <div className="jumbotron jumbotron-fluid" style={styles.background}>
            <div className="container">
                <h1 className="display-4"style={styles.text}>Wellcome</h1>
                <p className="lead" style={styles.text}>Portfolio of Aditya Gaikwad</p>
            </div>
            <br/>
            <div>
                <h2 style={styles.text}>About Me</h2>
                <div style={styles.background}>
                    
                </div>
            </div>
        </div>
    )
}

 