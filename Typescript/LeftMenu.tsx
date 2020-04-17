import * as React from 'react';

interface Icon {
    Url: string;
}

export default class LeftMenuComponent extends React.Component<any, any>{
    icons: Array<Icon>;

    constructor(props: any) {
        super(props);
        this.initIcons();
    }

    initIcons() {
        this.icons = [{ Url: "./icons/person.svg" }];
    }

    render() {
        return (
            <ul>
                {this.icons.map((item, i) => (<img src={item.Url} alt="personIcon" />))}
            </ul>)
            ;
    }
}