import React from "react";

const styles = {
    background: {
      backgroundColor: '#F27059',
      
    },
    Text:{
        textAlign: 'center'
    }
    
};
export default function footer(){
    return(
        <footer className="navbar fixed-bottom" style={styles.background}>
            <div className="container-fluid" >
                
            </div>
        </footer>
    );
}