import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSTransition } from "react-transition-group";
import LeftMenuComponent from "./LeftMenu"
import ContentCardComponent from "./ContentCard"
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
        return (
            <React.Fragment>
                <div className="flex h-full min-h-full float-left w-full lg:float-none">
                    <div className="lg:w-2/5 h-full">
                        <div className="flex h-full">
                            <div className="w-full lg:w-1/6 my-20 lg:bg-mainGray">
                                <LeftMenuComponent setNewActiveTab={this.tabClick} />
                            </div>
                            <div className="invisible lg:visible w-0 lg:w-5/6 text-white text-center lg:flex lg:flex-col" id="photoDiv">
                                <h1 className="text-5xl mt-24">Bc. Lukáš SALFICKÝ</h1>
                                <h2 className="mt-2">.NET developer</h2>
                                <a href="http://www.linkedin.com/in/salfickylukas" target="_blank" className="inline-block mx-auto mt-auto mb-12">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-current text-white hover:text-mainBlue duration-500 ease-in-out" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <span className="italic motto">"only a life lived for others is a life worthwhile"</span>
                                <span className="italic motto ml-auto mr-4">Albert Einstein</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 my-0 lg:my-20 bg-mainGray lg:overflow-auto min-h-full md:min-h-0" id="scrollArea">
                        <ContentCardComponent tabCode={this.state.activeTab} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));