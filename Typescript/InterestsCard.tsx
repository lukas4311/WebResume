import * as React from 'react';

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
            <div className="p-2 lg:p-6 rounded-lg bg-buttonsGray w-full sm:w-1/4 m-2 lg:m-6 text-center shadows duration-500">
                {this.props.svgIcon}
                <p>{this.props.title}</p>
            </div>
        );
    }
}