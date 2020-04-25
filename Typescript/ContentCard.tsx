import * as React from 'react';
import { Tabs } from './Tabs'
import { CSSTransition, SwitchTransition } from "react-transition-group";
import AboutMeComponent from "./AboutMe"
import WorkAndSchoolComponent from "./WorkAndSchool"

interface IProps {
    tabCode: Tabs;
}

export default class ContentCardComponent extends React.Component<IProps, any>{
    constructor(props: IProps) {
        super(props);
    }

    render() {
        let content = null;

        if (this.props.tabCode == Tabs.WorkEducation) {
            content = <WorkAndSchoolComponent />;
        }
        else if (this.props.tabCode == Tabs.PersonalInfo) {
            content = <AboutMeComponent />;
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