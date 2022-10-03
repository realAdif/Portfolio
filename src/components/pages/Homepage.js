import React from "react";
import profilePhoto from './AdityaMe.jpg';

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
        color: 'aliceblue',
        textDecoration: 'underline'
    },
    AboutMeText:{
        textAlign: 'center',
        color: 'aliceblue',
        fontSize: '25px'
    },
    photo:{
        width:"196px",
        borderRadius: "60px",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }
    
    
};
export default function HomePage(){
    
    return(
        
        <div className="jumbotron jumbotron-fluid" style={styles.background}>
            <div className="container">
                <h1 className="display-4"style={styles.text}>About Me</h1>
                
                <br/>
            </div>
            
            <br/>
            <br/>
            <div>
                <br/>
                <div>
                    <p style={styles.AboutMeText}>
                    Hi, I'm Aditya Gaikwad. I am a full-stack developer based in Sydney, Australia. 
                    </p>
                    <p style={styles.AboutMeText}>
                    I'm seriously passionate about programming and making engaging, dynamic user interfaces.
                    </p>
                    <p style={styles.AboutMeText}>
                    I have also experimented using C#. I do use the Unity engine to create my own games, and I participate in GameJams. 
                    </p>
                    <p style={styles.AboutMeText}>
                    I am a detail-oriented, independent worker who is well-organized and able to solve problems. 
                    </p>
                    
                </div>
                <img src={profilePhoto} style={styles.photo} alt="profile" />
            </div>
        </div>
       
    )
}

 