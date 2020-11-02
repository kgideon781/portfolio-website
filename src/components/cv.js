import React, {Component} from 'react'
import {Button, Cell, Grid} from "react-mdl";
import Experiences from "./experiences";

class Cv extends Component{


    render() {
        const text = ["I enjoy building Mobile Applications",
            "I have developed several Android applications", <br/>, <br/>,
            "Keja App that helps people find a house whenever the want to move out of their current.", <br/>, <br/>,
            "Abiri, This an uber clone app that I worked on a few months ago, it was the most challenging project I have ",
            "ever undertook since it involved a lot of APIs and I was proud of how it turned",
            "out eventually. I learnt a lot in the process",
            ""];
        return (
            <div>
                <Grid className={"resume__body"}>

                    <Cell col={2}></Cell>
                    <Cell className={"resume__right__col"} col={8}>


                        <h2>Experience</h2>
                        <Experiences

                            startYear={"2017"}
                            endYear={"Current"}
                            jobName={"Android Applications Development"}
                            jobLocation={"Software Development"}
                            jobDescription={text}
                        />
                        <hr style={{borderTop:'1px solid #6d6d6d'}}/>
                        <Experiences

                            startYear={"Jan, 2018"}
                            endYear={"Apr 2018"}
                            jobName={"ICT Support Assistant\n"}
                            jobLocation={"Uasin Gishu County Assembly"}
                            jobDescription={"Lorem ipsum dolor sit amet, quando vidisse an pri, ne per doctus insolens, sed ad augue choro petentium. An nam erat movet accumsan"}
                        />
                        <hr style={{borderTop:'1px solid #6d6d6d'}}/>

                        <Experiences

                            startYear={"Jan, 2019"}
                            endYear={"Oct 2019"}
                            jobName={"ICT Support Technician\n"}
                            jobLocation={"Talai Academy"}
                            jobDescription={"Lorem ipsum dolor sit amet, quando vidisse an pri, ne per doctus insolens, sed ad augue choro petentium. An nam erat movet accumsan " +
                            "Lorem ipsum dolor sit amet, quando vidisse an pri, ne per doctus insolens, sed ad augue choro petentium. An nam erat movet accumsan" +
                            "Lorem ipsum dolor sit amet, quando vidisse an pri, ne per doctus insolens, sed ad augue choro petentium. An nam erat movet accumsan"}
                        />

                        <Button colored={"red"}>Let's Work Together</Button>

                    </Cell>

                </Grid>
            </div>
        );
    }

}
export default Cv;