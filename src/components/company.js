import {Component} from "react";
import {Cell, Grid} from "react-mdl";

class Company extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop:'0px'}}>
                        {this.props.companyName}
                    </h4>
                    <p>{this.props.jobTitle}</p>
                </Cell>
            </Grid>
        )
    }

}
export default Company;