import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { Container, Row, Col } from 'react-grid-system';

const styles = {
    BackGround: {
        background: '#F79D65',
        height: '130px'
    },
    Card:{
        justify:"center"
    },
    FrontSide:{
        backgroundColor: '#F25C54',
        textAlign: 'center'
    },
    BackSide:{
        backgroundColor: '#F27059'
    },
    text:{
        textAlign: 'center'
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
                <h1 style={styles.text}>Back-End</h1>
                <Container>
                <Row  align="center">
                <Col>
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
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
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
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
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
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
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                        Link and information
                    </BackSide>
                </Flippy>
                </Col>
                </Row>
                </Container>
                <br/>
                <h1 style={styles.text}>Front-End</h1>
                <Container>
                <Row  align="center">
                <Col>
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
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
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
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
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
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
                    <FrontSide style={styles.FrontSide} >Project Name <br/> </FrontSide>
                    <BackSide style={styles.BackSide}>
                        Link and information
                    </BackSide>
                </Flippy>
                </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
}

