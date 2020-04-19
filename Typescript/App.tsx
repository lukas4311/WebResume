import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LeftMenuComponent from "./LeftMenu"
import { Tabs } from './Tabs'

class AppComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    tabClick(tab: Tabs) {
        alert(tab);
    }

    render() {
        return (
            <div className="flex h-full">
                <div className="w-1/2 h-full">
                    <div className="flex h-full">
                        <div className="w-1/6 my-20 bg-mainGray">
                            <LeftMenuComponent setNewActiveTab={this.tabClick}/>
                        </div>
                        <div className="w-5/6 text-white text-center" id="photoDiv">
                            <h1 className="text-5xl mt-24">Lukáš SALFICKÝ</h1>
                            <h2 className="mt-6">.NET developer</h2>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 my-20 bg-mainGray">
                    <h1 className="text-center text-white text-5xl">OBSAH</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));