import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Container, Row, Col } from 'react-grid-system';

const styles = {
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
        color: 'aliceblue'
    },
    BackSide:{
        backgroundColor: '#696969',
        textAlign: 'center',
        color: 'aliceblue'
    },
    text:{
        textAlign: 'center',
        color: 'aliceblue'
    }
    
};

export default function Portfolio(){
    const ref = useRef();
    return(
        <div>
            <div className="jumbotron jumbotron-fluid" style={styles.BackGround}>
                <div className="container">
                    <h1 className="display-4" style={styles.text}>Portfolio</h1>
                </div>
                
            </div>
            <br/>
            <div>
            <h1 style={styles.text}>Front-End</h1>
                <Container>
                <Row  align="center">
                <Col>
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >Tech-Blog<br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://tech-blog-realadif.herokuapp.com/'>Link</a>
                    <br/>
                    Tech Blog is where you can make a account and start posting!!
                    </BackSide>
                </Flippy>
                </Col>
                <Col align="center">
                <Flippy flipDirection="vertical" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}>Movie-Guide<br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://moive-guide.herokuapp.com/'>Link</a>
                    <br/>
                      users to keep track of upcoming and movies that have recently released and with information on where to watch them.
                    </BackSide>
                </Flippy>
                </Col>
                <Col align="center">
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}>Weather-API<br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://realadif.github.io/Weather-API/'>Link</a>
                    <br/>
                    Keep a track of the weather it!!
                    </BackSide>
                </Flippy>
                </Col>
                <Col align="center">
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}>Currency-Converter<br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                    <a href='https://realadif.github.io/Currency-Converter/'>Link</a>
                    <br/>
                     allowed the user to convert the currencies of their choice, but also gives the user an up-to-date news feed that they can browse.
                    </BackSide>
                </Flippy>
                </Col>
                </Row>
                </Container>
                <h1 style={styles.text}>Back-End</h1>
                <Container>
                <Row  align="center">
                <Col>
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide}> Social-Network-API <br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                        Link and information
                    </BackSide>
                </Flippy>
                </Col>
                <Col align="center">
                <Flippy flipDirection="vertical" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >README-File-Generator <br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                        Link and information
                    </BackSide>
                </Flippy>
                </Col>
                <Col align="center">
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >Team-Profile-Generator<br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                        Link and information
                    </BackSide>
                </Flippy>
                </Col>
                <Col align="center">
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >Employee-Tracker<br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                        Link and information
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

