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
            <div>
                <h3 className="text-xl">{this.props.Name}</h3>
                <span>{this.props.From} - {this.props.To}</span>
                <p>
                    {this.props.Description}
                </p>
                {/* {this.props.Technologies.map((t, i) => <span key={i}>{t}</span>)} */}
            </div>
        );
    }
}