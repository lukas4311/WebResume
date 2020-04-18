import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LeftMenuComponent from "./LeftMenu"

class AppComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="flex">
                <div className="w-1/2">
                    <div className="flex">
                        <div className="w-2/10 my-20 bg-mainGray">
                            <LeftMenuComponent />
                        </div>
                        <div className="w-8/10 border-8 border-mainGray" id="photoDiv">
                            <img src='./image/photo3.jpg' />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 my-20">
                    <h1 className="text-center text-white text-5xl">OBSAH</h1>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));