import React, {Component} from "react"
import {Content, Drawer, Header, Layout, Navigation} from "react-mdl";
import {Link} from "react-router-dom";
import "../components/styling/navbar.css"
import Main from "./main";
import main_logo from "../files/main_logo.jpg"




class Navbar extends Component{
    render() {
        return (

            <div className="demo-big-content">
                <Layout className={"page__body"}>
                    <Header className={"header__nav"} title={<img style={{height:'50px'}} src={main_logo} alt={"logo"}/>} scroll>
                        <Navigation className={"main__logo center"}>
                            {/*<img src={main_logo} alt={"logo"}/>*/}

                        </Navigation>
                        <Navigation >
                            <Link to={"/landing"}>Dashboard</Link>
                            <Link to={"/projects"}>Projects</Link>
                            <Link to={"/contacts"}>Contacts</Link>
                            <Link to={"/about"}>About</Link>
                        </Navigation>

                    </Header>
                    <Drawer className={"drawer__main"} title="Title">
                        <Navigation>
                            <Link to={"/landing"}>Dashboard</Link>
                            <Link to={"/projects"}>Projects</Link>
                            <Link to={"/contacts"}>Contacts</Link>
                            <Link to={"/about"}>About</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>
        )
    }


}
export default Navbar;