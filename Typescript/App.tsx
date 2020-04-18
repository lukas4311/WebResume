import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LeftMenuComponent from "./LeftMenu"

class AppComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="flex h-full">
                <div className="w-1/2 h-full">
                    <div className="flex h-full">
                        <div className="w-1/6 my-20 bg-mainGray">
                            <LeftMenuComponent />
                        </div>
                        <div className="w-5/6 border-8 border-mainGray text-white text-center" id="photoDiv">
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