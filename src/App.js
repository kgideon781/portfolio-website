
import './App.css';

import {Component} from "react";
import Navbar from "./components/navbar";
import BootstrapNavbar from "./components/BootstrapNavbar";


class App extends Component {
    render() {
        return (
            <div className="App">

                {/*<Navbar/>*/}
                <BootstrapNavbar/>

            </div>
        );
    }


}

export default App;
