﻿import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LeftMenuComponent from "./LeftMenu"

class AppComponent extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    render() {
        return (
            <div className="flex">
                <div className="w-1/3">
                    <div className="flex">
                        <LeftMenuComponent />
                    </div>
                </div>
                <div className="w-2/3">
                    <span>OBSAH</span>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));