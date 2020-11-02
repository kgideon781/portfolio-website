import React, {Component} from 'react'
import {Cell, Grid} from "react-mdl";
import "./styling/landing.css"

class About extends Component{
    render() {
        return (

            <div className={"grid__main"}>
                <Grid className={"main__grid"}>
                    <Cell className={"cell__left"} col={4}>
                        <p style={{marginTop:'10px'}}>{this.props.brieflyAboutMe}</p>
                    </Cell>

                    <Cell col={3}></Cell>

                    <Cell className={"cell__right"} align={"stretch"} col={5}>
                        <h4 style={{marginTop:'0px'}}>
                            {this.props.detailedDescription}
                        </h4>


                    </Cell>


                </Grid>
            </div>



        );
    }

}
export default About;