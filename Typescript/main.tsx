import * as React from 'react';
import * as ReactDOM from 'react-dom';
class MyReactApp extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <span>
                Hello World
            </span>
        );
    }
}
ReactDOM.render(<MyReactApp />, document.getElementById('app'));