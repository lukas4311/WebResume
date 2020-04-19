import * as React from 'react';
import { Tabs } from './Tabs'
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default class AboutMeComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        let content = "O mě";

        if (this.props.tabCode != Tabs.Contacts) {
            content = "Kontakty";
        }

        return (
            <TransitionGroup className="transitionContainer">
                <CSSTransition key={this.props.tabCode} timeout={700} classNames="fade">
                        <h1 className="text-center text-white text-5xl">{content}</h1>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}