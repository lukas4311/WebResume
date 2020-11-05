import * as React from 'react';
import { ExperienceCardComponentState } from './ExperienceCardComponentState';
import { Modal } from './Modal'
import { IExperienceCardProps } from './Models/IExperienceCardProps';

export class ExperienceCardComponent extends React.Component<IExperienceCardProps, ExperienceCardComponentState>{
    constructor(props: IExperienceCardProps) {
        super(props);
        this.showDescription = this.showDescription.bind(this);
        this.hideDescription = this.hideDescription.bind(this);
        this.state = { showDescriptionModal: false };
    }

    private showDescription = () => {
        if (this.props.Description != undefined)
            this.setState({ showDescriptionModal: true });
    };

    private hideDescription = () => {
        this.setState({ showDescriptionModal: false });
    };

    public render() {
        return (
            <div className="flex">
                <Modal show={this.state.showDescriptionModal} handleClose={this.hideDescription}>
                    <div className="text-center p-6">
                        <h2 className="text-2xl text-center">Popis práce</h2>
                        {this.props.DescriptionHtml}
                        <h2 className="text-2xl text-center pt-10">Tech stack</h2>
                        {this.props.Technologies.map((item: string, i: number) => <span key={i} className="px-2 py bg-blue-400 m-2 rounded-full inline-block leading-normal">{item}</span>)}
                    </div>
                </Modal>
                <div className="w-full" onClick={this.showDescription}>
                    <h3 className="text-lg text-center">{this.props.Name}</h3>
                    <span className="inline-block">{this.props.Position}</span>
                    <span className="text-sm inline-block">{this.props.From} - {this.props.To}</span>
                </div>
            </div>
        );
    }
}