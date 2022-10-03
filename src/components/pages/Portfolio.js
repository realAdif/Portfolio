import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Container, Row, Col } from 'react-grid-system';

const styles = {
    mainPage:{
        margin:'30px'
    },
    BackGround: {
        background: '#4F4F4F',
        height: '130px'
    },
    Card:{
        justify:"center"
    },
    FrontSide:{
        backgroundColor: '#4F4F4F',
        textAlign: 'center',
        color: 'aliceblue',
        fontSize: '25px'
    },
    FrontSideText:{
        position: 'absolute',
        bottom: '10px',
        width:' 80%'
    },
    BackSide:{
        backgroundColor: '#696969',
        textAlign: 'center',
        color: 'aliceblue',
        fontSize: '20px'
    },
    backSideText:{
        position: 'absolute',
        bottom: '10px',
        left: '60px',
        width: 'max-content'
    },
    text:{
        textAlign: 'center',
        color: 'aliceblue',
        textDecoration: 'underline'
    }
    
};

export default function Portfolio(){
    const ref = useRef();
    return(
        <div >
            <div className="jumbotron jumbotron-fluid" style={styles.BackGround}>
                <div className="container">
                    <h1 className="display-4" style={styles.text}>PORTFOLIO</h1>
                </div>
                
            </div>
            <br/>
            <div style={styles.mainPage}>
            <h1 style={styles.text}>Front-End</h1>
                <Container>
                <Row  align="center">
                <Col>
                
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}> Tech-Blog <p style={styles.FrontSideText}>Full Stack</p>
                    </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://tech-blog-realadif.herokuapp.com/'>Website Link</a>
                    <br/>
                    Tech Blog is where you can make a account and start posting!!
                    <a style={styles.backSideText} href='https://tech-blog-realadif.herokuapp.com/'>GitHub Link</a>
                    </BackSide>
                </Flippy>

                </Col>

                <Col align="center">
                <Flippy flipDirection="vertical" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}>Movie-Guide <p style={styles.FrontSideText}>Full Stack</p> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://moive-guide.herokuapp.com/'>Website Link</a>
                    <br/>
                      Users to keep track of upcoming and movies that have recently released and with information on where to watch them.
                      <a style={styles.backSideText} href='https://github.com/realAdif/Movie-Guide'>GitHub Link</a>
                    </BackSide>
                </Flippy>

                </Col>
                
                <Col align="center">

                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}>Weather-API <p style={styles.FrontSideText}>Full Stack</p></FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://realadif.github.io/Weather-API/'>Website Link</a>
                    <br/>
                    Keep a track of the weather it!!
                    <a style={styles.backSideText} href='https://github.com/realAdif/Weather-API'>GitHub Link</a>
                    </BackSide>
                </Flippy>

                </Col>
                <Col align="center">

                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}>Currency-Converter <p style={styles.FrontSideText}>Full Stack</p> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://realadif.github.io/Currency-Converter/'>Website Link</a>
                    <br/>
                     Allowed the user to convert the currencies of their choice, but also gives the user an up-to-date news feed that they can browse.
                     <a style={styles.backSideText} href='https://github.com/realAdif/Currency-Converter'>GitHub Link</a>
                    </BackSide>
                </Flippy>

                </Col>
                </Row>
                </Container>

                <h1 style={styles.text}>Back-End</h1>
                <br/>
                <Container>
                <Row  align="center">
                <Col >
 
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}> Social-Network-API <p style={styles.FrontSideText}>MongooseDB</p> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <br/>
                    MongooseDB where you can make a user, thoughts, reaction 
                     <a style={styles.backSideText} href='https://github.com/realAdif/Social-Network-API'>GitHub Link</a>
                    </BackSide>
                </Flippy>
                </Col>
                <Col align="center">
                <Flippy flipDirection="vertical" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >README-File-Generator <p style={styles.FrontSideText}>JavaScript</p> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <br/>
                    Anwsers the prompt it will make your own README.md file
                     <a style={styles.backSideText} href='https://github.com/realAdif/README-File-Generator'>GitHub Link</a>
                    </BackSide>
                </Flippy>

                </Col>
                <Col align="center">

                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >Team-Profile-Generator <p style={styles.FrontSideText}>JavaScript/HTML</p> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <br/>
                    Anwsers the prompt it will make your own HTML page with you team profile
                     <a style={styles.backSideText} href='https://github.com/realAdif/Team-Profile-Generator'>GitHub Link</a>
                    </BackSide>
                </Flippy>

                </Col>
                <Col align="center">

                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '220px', height: '350px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >Employee-Tracker <p style={styles.FrontSideText}>JavaScript/SQL</p> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <br/>
                    SQL databases where you can add department, roles and employees 
                     <a style={styles.backSideText} href='https://github.com/realAdif/Employee-Tracker'>GitHub Link</a>

                    </BackSide>
                </Flippy>

                </Col>
                </Row>
                </Container>
                <br/>
                
            </div>
        </div>
    );
}

