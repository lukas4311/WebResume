import * as React from 'react';

export default class AboutMeComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (<h1 className="text-center text-white text-5xl">O mě</h1>)
    }
}