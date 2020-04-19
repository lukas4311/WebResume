import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import LeftMenuComponent from "./LeftMenu"
import AboutMeComponent from "./AboutMe"
import ContactComponent from "./Contacts"
import { Tabs } from './Tabs'

interface AppState {
    activeTab: Tabs;
}

class AppComponent extends React.Component<{}, AppState> {
    showMessage = true;

    constructor(props: {}) {
        super(props);
        this.state = { activeTab: Tabs.PersonalInfo }
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(tab: Tabs) {
        this.setState({ activeTab: tab });
    }

    render() {
        let shownComponent = <AboutMeComponent />
        if (this.state.activeTab == Tabs.PersonalInfo) {
            shownComponent = <AboutMeComponent />
        }
        else {
            shownComponent = <ContactComponent />
        }

        return (
            <div className="flex h-full">
                <div className="w-1/2 h-full">
                    <div className="flex h-full">
                        <div className="w-1/6 my-20 bg-mainGray">
                            <LeftMenuComponent setNewActiveTab={this.tabClick} />
                        </div>
                        <div className="w-5/6 text-white text-center" id="photoDiv">
                            <h1 className="text-5xl mt-24">Lukáš SALFICKÝ</h1>
                            <h2 className="mt-6">.NET developer</h2>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 my-20 bg-mainGray">
                    <CSSTransition in={true} timeout={700} classNames="fade" appear={true}>
                        <AboutMeComponent tabCode={this.state.activeTab}/>
                    </CSSTransition>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));