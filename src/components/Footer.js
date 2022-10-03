import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
const styles = {
    background: {
      backgroundColor: '#4F4F4F',
      height: '40px'
    },
    log:{
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }

    
};
export default function footer(){
    return(
        <footer className="navbar fixed-bottom" style={styles.background}>
            <div className="container-fluid" >
            <a target="_blank" href="https://github.com/realAdif" rel="noreferrer" style={styles.log}>
				<FontAwesomeIcon icon={faGithub} />
			</a>
            </div>
        </footer>
    );
}