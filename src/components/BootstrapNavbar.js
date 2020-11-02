import React, {Component} from 'react'

class BootstrapNavbar extends Component{
    render() {
        return (
            <div>
                <nav className="tm-navbar uk-navbar"
                     data-uk-sticky="{'top': '.uk-block', 'animation': 'uk-animation-slide-top'}" style="margin: 0px;">

                    <div className="uk-container uk-container-center">

                        <div className="uk-grid uk-flex-middle uk-hidden-small">

                            <div className="uk-flex-item-1">
                                <ul className="uk-navbar-nav uk-hidden-small">
                                    <li className="uk-active"><a href="/">Home</a></li>
                                    <li><a href="/projects">My projects</a></li>
                                </ul>
                            </div>

                            <div className="uk-text-center">
                                <a className="tm-logo uk-align-center" href="https://www.madonahsyombua.com">

                                    <p><img style="width: 302px; height: 24px;" src="/images/madonah/Main_Logo.png"
                                            alt="Logo" width="302" height="24"/></p></a>
                            </div>

                            <div className="uk-flex-item-1">
                                <ul className="tm-nav-secondary uk-navbar-nav uk-float-right">
                                    <li className="uk-parent" data-uk-dropdown="{'preventflip':'y'}"
                                        aria-haspopup="true" aria-expanded="false"><a href="#">Articles</a>
                                        <div className="uk-dropdown uk-dropdown-navbar uk-dropdown-width-1">
                                            <div className="uk-grid uk-dropdown-grid">
                                                <div className="uk-width-1-1">
                                                    <ul className="uk-nav uk-nav-navbar">
                                                        <li><a href="/articles/android-dev">Android Dev</a></li>
                                                        <li><a href="/articles/machine-learning">Machine Learning</a>
                                                        </li>
                                                        <li><a href="/articles/mathematics">Mathematics</a></li>
                                                        <li><a href="/articles/webinars">Webinars</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="uk-flex uk-flex-middle uk-flex-space-between uk-visible-small">

                            <a className="tm-logo-small uk-visible-small" href="https://www.madonahsyombua.com">
                                <p></p></a>

                            <a href="#offcanvas" className="uk-navbar-toggle uk-visible-small" data-uk-offcanvas=""></a>

                        </div>

                    </div>


                </nav>
            </div>
        )
    }
}
export default BootstrapNavbar;