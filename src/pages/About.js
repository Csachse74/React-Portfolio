import React from 'react';
import { Link } from 'react-router-dom';
import MountainBike from './../assets/images/MountainBiking.jpg';
import './../assets/styles/about.css';

function About() {
    return (
        <div>
            <div className="container">
                <div className="row mb-5">
                    <h1>Hello, I'm Cameron.  It's nice to meet you.</h1>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={MountainBike} alt="Mountain Biking with my father" className="w-100" />
                        <p>Contact Me:</p>
                        <div className="row">
                        <a href="https://github.com/Csachse74" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
                        <a href="https://www.linkedin.com/in/cameron-sachse-33148a222/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
                        <a href="mailto:cam.sachse1@gmail.com"><i className="fas fa-envelope icon"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p className="aboutText">
                            I'm from Buford, Georgia. 
                            I do not have a collage education, however I make up for this by being a jack of all trades. 
                            I have lived in Buford since I was 6 months old, and have just bought my first house. 
                            I worked in construction for two and a half years installing lightning protection.  
                            During the last few years, I have sparked an interest in coding, particularly in web development. 
                            My father has been a software engineer for the last 25 years. 
                            I decided to pursue a career in web development to help my father's company.
                        </p>
                        <p className="aboutText">
                            I will soon be earning my certificate in full-stack web development from the Georgia Tech Coding BootCamp.  During my BootCamp, I developed a passion for back-end web development and love to learn new ways to do actions and hook everything together.  Throughout my BootCamp I have learned the skills necessary to build a full functional application and has me excited to begin my new job as a software engineer.
                        </p>
                        <p className="aboutText">
                            In my spare time, I enjoy playing video games, rebuilding cars, exercising, hiking, and playing with my animals.
                        </p>
                        <p className="aboutText">
                            Check out my <Link to="/portfolio" >portfolio</Link>!
                        </p>
                        <p className="aboutText">
                            I'm experienced in:
                            <ul>
                                <li>Browser-based Technologies:  HTML5, CSS, JavaScript, jQuery, Bootstrap, and React.js</li>
                                <li>Server-side Technologies:  Node.js and Express.js</li>
                                <li>Databases:  MySQL, MongoDB, Mongoose, and Microsoft SQL Server</li>
                                <li>API Interaction:  API, JSON, and AJAX</li>
                                <li>Deployment:  Git, GitHub Pages, and Heroku</li>
                                <li>Other:  Command Line, Quality Assurance, Redux, User Authentication</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
