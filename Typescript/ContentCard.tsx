import * as React from 'react';
import { Tabs } from './Models/Tabs'
import { CSSTransition, SwitchTransition } from "react-transition-group";
import AboutMeComponent from "./AboutMe"
import WorkAndSchoolComponent from "./WorkAndSchool"
import SkillsComponent from './Skills'
import { IContentCardComponentProps } from './IContentCardComponentProps';

export default class ContentCardComponent extends React.Component<IContentCardComponentProps, any>{
    constructor(props: IContentCardComponentProps) {
        super(props);
    }

    public render() {
        let content = null;

        if (this.props.tabCode == Tabs.WorkEducation) {
            content = <WorkAndSchoolComponent />;
        }
        else if (this.props.tabCode == Tabs.PersonalInfo) {
            content = <AboutMeComponent />;
        }
        else if(this.props.tabCode == Tabs.Skills){
            content = <SkillsComponent/>
        }

        return (
            <SwitchTransition>
                <CSSTransition key={this.props.tabCode} timeout={700} classNames="fade">
                    {content}
                </CSSTransition>
            </SwitchTransition>
        );
    }
}