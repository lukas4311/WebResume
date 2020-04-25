import * as React from 'react';

export interface IExperienceCardProps {
    Name: string;
    From: string;
    To: string;
    Description: string;
    Technologies: string[];
    Position: string;
}

export class ExperienceCardComponent extends React.Component<IExperienceCardProps, any>{
    constructor(props: IExperienceCardProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <h3 className="text-lg text-center">{this.props.Name}</h3>
                <span className="inline-block">{this.props.Position}</span>
                <span className="text-sm inline-block">{this.props.From} - {this.props.To}</span>
                {/* <p>
                    {this.props.Description}
                </p> */}
                {/* {this.props.Technologies.map((t, i) => <span key={i}>{t}</span>)} */}
            </React.Fragment>
        );
    }
}