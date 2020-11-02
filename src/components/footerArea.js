import React, {Component} from 'react'
import {Footer, FooterLinkList, FooterSection} from "react-mdl";
import "./styling/footerArea.css"

class FooterArea extends Component{

    render() {
        return (
            <div>
                <Footer size={"mini"}>
                    <FooterSection type={"left"}>
                        <FooterLinkList>
                            <a href={"/"}>Faqs</a>
                            <a href={"/"}>Privacy & Terms</a>

                        </FooterLinkList>
                    </FooterSection>
                    <FooterSection type={"right"} >
                        <FooterLinkList>

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
                        </FooterLinkList>
                    </FooterSection>
                </Footer>


            </div>
        );
    }
    
}
export default FooterArea;