import * as React from 'react';

export interface IExpericnceCardProps {
    Name: string;
    From: string;
    To: string;
    Description: string;
    Technologies: string[];
}

export class ExpericnceCardComponent extends React.Component<IExpericnceCardProps, any>{
    constructor(props: IExpericnceCardProps) {
        super(props);
    }

    render() {
        return (
            <div className="w-1/4">
                <h3 className="text-2xl">{this.props.Name}</h3>
                <span>{this.props.From} - {this.props.To}</span>
                <p>
                    Programování a kódování webových stránek za pomoci jazyka C# a
                    technologií ASP.NET MVC 5.
                    {this.props.Description}

                    {/* Další technologie: EntityFramework, MS SQL, Telerik (UI for ASP.NET MVC),
                    Javascript, HTML5, CSS3 (Sass, Compass), Team foundation server, Adobe Photoshop */}
                </p>
                {this.props.Technologies.map((t, i) => <span key={i}>{t}</span>)}
            </div>
        );
    }
}