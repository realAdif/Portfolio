import React from "react";

const styles = {
    background: {
        background: '#4F4F4F',
        height: '130px',
        
    },
    background1: {
        background: '#333333',
        boxShadow: '1px 1px 15px #141414',
        margin: '4em',
        padding: '5em',
        height: '250px',
        
    },
    text:{
        textAlign: 'center',
        color: 'aliceblue'
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
            <div >
                <h2 style={styles.text}>About Me</h2>
                <div style={styles.background1}>
                    <p style={styles.text}>
                    I’m a Front-End Developer located in Australia. I have a serious passion for UI effects, 
                    animations and creating intuitive, dynamic user experiences.
                    </p>
                    <p style={styles.text}>
                    Well-organised person, problem solver, independent employee with high attention to detail. 
                    Fan of MMA, outdoor activities, TV series and English literature. 
                    </p>
                    <p style={styles.text}>
                    Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                    </p>
                    
                </div>
            </div>
        </div>
       
    )
}

 