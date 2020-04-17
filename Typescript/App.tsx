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
                        <div className="w-2/10">
                            <LeftMenuComponent />
                        </div>
                        <div className="w-8/10">
                            <img src='./image/photo.jpg' />
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <span>OBSAH</span>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));