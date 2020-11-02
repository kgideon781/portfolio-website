import React, {Component} from "react";
import {Cell, Grid} from "react-mdl";

class Experiences extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>


                    <h5 style={{marginTop:'50px', color:'grey', textAlign:'left'}}>
                        {this.props.jobLocation}
                    </h5>

                    <p style={{textAlign: 'left'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>

                    <h4 style={{marginTop:'0px'}}>
                        {this.props.jobName}
                    </h4>
                    <p style={{textAlign: 'left'}}>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }

}
export default Experiences;