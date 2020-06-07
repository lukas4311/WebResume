import * as React from 'react';
import { IModalProps, Modal } from './Modal'
import SvgIcons from './SvgIcons'

export interface IExperienceCardProps {
    Name: string;
    From: string;
    To: string;
    Description: string;
    DescriptionHtml?: JSX.Element;
    Technologies: string[];
    Position: string;
}

export class ExperienceCardComponent extends React.Component<IExperienceCardProps, any>{
    constructor(props: IExperienceCardProps) {
        super(props);
        this.showDescription = this.showDescription.bind(this);
        this.hideDescription = this.hideDescription.bind(this);
        this.showTechnologies = this.showTechnologies.bind(this);
        this.hideTechnologies = this.hideTechnologies.bind(this);
        this.state = { showDescriptionModal: false, showTechnologiesModal: false };
    }

    showDescription = () => {
        this.setState({ showDescriptionModal: true });
    };

    hideDescription = () => {
        this.setState({ showDescriptionModal: false });
    };

    showTechnologies = () => {
        this.setState({ showTechnologiesModal: true });
    };

    hideTechnologies = () => {
        this.setState({ showTechnologiesModal: false });
    };

    render() {
        let iconsColumn;

        if (this.props.Description != undefined || this.props.Technologies.length != 0) {
            iconsColumn = (
                <div className="w-6 flex flex-col">
                    {this.props.Description != undefined ? <a onClick={this.showDescription} className="ml-auto inline-block cursor-pointer experienceCard">{SvgIcons.descIcon}</a> : ""}
                    {this.props.Technologies.length != 0 ? <a onClick={this.showTechnologies} className="ml-auto inline-block mt-auto cursor-pointer experienceCard">{SvgIcons.techIcon}</a> : ""}
                </div>
            )
        }

        return (
            <div className="flex">
                <Modal show={this.state.showDescriptionModal} handleClose={this.hideDescription}>
                    <div className="text-center">
                        <h2 className="text-2xl text-center">Popis práce</h2>
                        <p>{this.props.Description}</p>
                    </div>
                </Modal>
                <Modal show={this.state.showTechnologiesModal} handleClose={this.hideTechnologies}>
                    <div className="text-center">
                        <h2 className="text-2xl text-center">Používané technologie</h2>
                        {this.props.Technologies.map((item:string, i:number) => <span key={i} className="px-2 py bg-blue-400 m-2 rounded-full inline-block leading-normal">{item}</span>)}
                    </div>
                </Modal>
                <div className="w-full">
                    <h3 className="text-lg text-center">{this.props.Name}</h3>
                    <span className="inline-block">{this.props.Position}</span>
                    <span className="text-sm inline-block">{this.props.From} - {this.props.To}</span>
                </div>
                {iconsColumn}
            </div>
        );
    }
}