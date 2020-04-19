import * as React from 'react';

export default class ContactComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (<h1 className="text-center text-white text-5xl">Kontakty</h1>)
    }
}