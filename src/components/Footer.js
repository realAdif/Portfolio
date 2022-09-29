import React from "react";

const styles = {
    background: {
      backgroundColor: '#F27059',
    },
    
};
export default function footer(){
    return(
        <footer className="navbar fixed-bottom" style={styles.background}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#Footer">Footer bottom</a>
            </div>
        </footer>
    );
}