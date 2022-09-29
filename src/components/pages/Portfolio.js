import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const styles = {
    background: {
        background: '#F79D65',
        height: '130px'
    },
    card:{
        
    }
    
};

export default function Portfolio(){
    const ref = useRef();
    return(
        <div>
            <div className="jumbotron jumbotron-fluid" style={styles.background}>
                <div className="container">
                    <h1 className="display-4">Portfolio</h1>
                </div>
                
            </div>
            <br/>
            <div>
                <Flippy flipDirection="horizontal" flipOnClick={true} flipOnHover={true} 
                    ref={ref} 
                    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
                    >
                    <FrontSide style={{ backgroundColor: '#F25C54'}} >Project Name <br/> </FrontSide>
                    <BackSide style={{ backgroundColor: '#F27059'}}>Link and information</BackSide>
                </Flippy>
            </div>
        </div>
    );
}

