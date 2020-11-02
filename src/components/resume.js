import React, {Component} from 'react'

import {Cell, Grid} from "react-mdl";
import About from "./about";
import "./styling/landing.css"
import "./resume.css"

class Resume extends Component{


    render() {
        return (
            <div>
                <Grid className={"resume__grid"}>

                    <Cell className={"resume__right__col"} col={10}>
                        <h2>Briefly about me</h2>
                        <About
                            brieflyAboutMe={<h2 className="tm-heading-line">I am a Software<br
                                className="uk-visible-large"/>Engineer &amp; <br className="uk-visible-large"/>A Mobile
                                App Developer</h2>}

                            detailedDescription={<span style={{fontSize: '13.68px'}}>I am a tech-savvy person. I develop computer programs and write code for a living. My passion lies in writing code and developing awesome stuff that impacts life. <br/> I find moments of brilliance when I create a Mobile App or a Software that produces a good impact. I like to imagine new ways technology can touch lives in a meaningful manner. With that in mind, I ask myself how I can be a part of the solution ~ using my knowledge, experience, and skills. It's pretty amazing when you think about it.</span>
                            }
                        />
                       {/* <Experience
                        jobName={"ICT Support Assistant"}
                        jobLocation={"Eldoret"}
                        jobDescription={"Lorem ipsum dolor sit amet"}
                        />*/}
                        <div className={"social__links"}>
                            {/* LinkedIn */}
                            <a href={"https://www.linkedin.com/in/gideon-kiprotich-172b04186"} rel={"noopener noreferrer"} target={"_blank"}>
                                <i className={"fa fa-linkedin-square"} aria-hidden={"true"}/>
                            </a>

                            {/* LinkedIn */}
                            <a href={"https://github.com/kgideon781"} rel={"noopener noreferrer"} target={"_blank"}>
                                <i className={"fa fa-github-square"} aria-hidden={"true"}/>
                            </a>

                            {/* Freecodecamp */}
                            <a href={"https://google.com"} rel={"noopener noreferrer"} target={"_blank"}>
                                <i className={"fa fa-facebook-square"} aria-hidden={"true"}/>
                            </a>

                            {/* Youtube */}
                            <a href={"https://youtube.com/channel/UCa8KzRQqo3QljbzNmDhXkkA"} rel={"noopener noreferrer"} target={"_blank"}>
                                <i className={"fa fa-youtube-square"} aria-hidden={"true"}/>
                            </a>
                            <hr/>


                        </div>



                    </Cell>
                </Grid>
            </div>
        );
    }

}
export default Resume;