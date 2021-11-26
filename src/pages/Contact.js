import React from 'react';

function Contact() {
    return (
        <div>
            <div className="container">
                <h1>Contact Me</h1>
                <p>
                    <a href="mailto:cam.sachse1@gmail.com">
                        <i className="fas fa-envelope icon"> cam.sachse1@gmail.com</i>
                    </a>
                </p>
                <p>
                    <a href="https://www.linkedin.com/in/cameron-sachse-33148a222/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin icon"> LinkedIn</i>
                    </a>
                </p>
                <p>
                    <a href="https://github.com/Csachse74" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github icon"> GitHub Profile</i>
                    </a>
                </p>
            </div>
        </div>
    );  
}

export default Contact;