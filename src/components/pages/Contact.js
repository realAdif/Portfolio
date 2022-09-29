import React from "react";

const styles = {
    background: {
        background: '#F79D65',
        height: '130px'
    },
    
};

export default function Protfolio(){
    return(
        <div>
            <div className="jumbotron jumbotron-fluid" style={styles.background}>
                <div className="container">
                    <h1 className="display-4">Contact</h1>
                </div>
            </div>
        </div>
    );
}

