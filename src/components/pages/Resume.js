import React from "react";
import { Container, Row, Col } from 'react-grid-system';
import File from "./Aditya.pdf";

const styles = {
    background: {
        background: '#4F4F4F',
        height: '130px'
    },
    text:{
        textAlign: 'center',
        color: 'aliceblue',
        textDecoration: 'underline'
    },
    titleText:{
        textDecoration: 'underline',
        fontSize: '30px'
    },
    mainText:{
        textAlign: 'center',
        color: 'aliceblue',
        fontSize: '20px'
    }
};


export default function Resume(){

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(File).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Aditya.pdf';
                alink.click();
            })
        })
    }


    return(
        <div>
            <div className="jumbotron jumbotron-fluid" style={styles.background}>
                <div className="container">
                    <h1 className="display-4" style={styles.text}>RESUME</h1>
                </div>
            </div>
            <div style={styles.mainText}>
                <Container>
                    <Row align='center'>
                        <Col>
                        <p style={styles.titleText}>Front-end</p>
                        <ul>
                            <li>JQuery</li>
                            <li>BootStrap</li>
                            <li>CSS</li>
                            <li>DOM Manipulation</li>
                            <li>React</li>
                        </ul>
                        </Col>

                        <Col>
                        <p style={styles.titleText}>Back-end</p>
                        <ul>
                            <li>NodeJs</li>
                            <li>JavaScript</li>
                            <li>Web API</li>
                            <li>JSON</li>
                            <li>Testing</li>
                            <li>Problem-Solving</li>
                        </ul>
                        </Col>

                    </Row>
                </Container>
            </div>
            <div style={styles.mainText}>
                Download my resume for more information:
                <br/>
                <a download='reusme.docx' href="./"> </a>  
                <button type="button" className="btn btn-secondary btn-lg" onClick={onButtonClick}>Resume</button>
                
            </div>


        </div>
    )
}