import React, {Component} from 'react'
import "./styling/landing.css"
import Resume from "./resume";
import CardLayout from "./cardLayout";
import Cv from "./cv";
import FooterArea from "./footerArea";


class Landing extends Component{
    render() {
        return (
            <div>
                <div className={"title__div"}>
                    <h1> Hello!<br/>

                    </h1>
                    <strong><em>I Am Gideon Kiprotich</em></strong>

                    {/*<h4>I am Gideon Kiprotich</h4>*/}

                    <form className={"form"}>

                        <fieldset className={"fieldset"}>
                            <input placeholder={"Email"} />
                            <button type={"submit"} >Request My Resume</button>
                        </fieldset>
                    </form>
                    <p>*Get my resume straight to your inbox</p>

                    <Resume/>
                    <CardLayout/>
                    <Cv/>
                    <FooterArea/>

                </div>

            </div>
        );
    }

}
export default Landing;