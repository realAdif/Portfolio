import {React, useState} from "react";
import {send} from 'emailjs-com';

const styles = {
    background: {
        background: '#4F4F4F',
        height: '130px'
    },
    FormDiv:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '71vh'
    },
    Form:{
        width: '50%'
    },
    formText:{
        
        color: 'aliceblue',
        fontSize: '20px'
    },
    text:{
        textAlign: 'center',
        color: 'aliceblue',
        textDecoration: 'underline'
    }
};

export default function Protfolio(){
    const [toSend, setToSend] = useState({
        name: '',
        email:'',
        message:''
    });
    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_uu69lcr',
            'template_e00uikj',
            toSend,
            'Q3p320RRjx9_BA_sx'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.message);
            alert('You Email has been send :)')
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
    };
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };


    return(
        <div>
            <div className="jumbotron jumbotron-fluid" style={styles.background}>
                <div className="container">
                    <h1 className="display-4" style={styles.text}>CONTACT ME</h1>
                </div>
            </div>
            <div style={styles.FormDiv}>
                <form style={styles.Form} onSubmit={onSubmit}>
                    <div className="form-group" style={styles.formText}>
                        <label >Name:</label>
                        <input  className="form-control" name="name" value={toSend.name} onChange={handleChange}  aria-describedby="emailHelp" placeholder="Name"/>
                    </div>
                    <br/>
                    <div className="form-group" style={styles.formText}>
                        <label >Email:</label>
                        <input type="email" className="form-control" name="email" value={toSend.email} onChange={handleChange} placeholder="Email"/>
                    </div>
                    <br/>
                    <div className="form-group" style={styles.formText}>
                        <label>Message:</label>
                        <textarea className="form-control"  rows="3" name="message" value={toSend.message} onChange={handleChange} placeholder="Message"></textarea>
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

