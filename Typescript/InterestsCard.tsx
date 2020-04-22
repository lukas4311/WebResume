﻿import * as React from 'react';

export interface IInterestsCardProps {
    svgIcon: JSX.Element;
    title: string;
}

export class InterestsCard extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="p-6 rounded-lg bg-buttonsGray w-1/4 m-6 text-center hover:shadow-2xl duration-500">
                {this.props.svgIcon}
                <p>{this.props.title}</p>
            </div>
        );
    }
}