import * as React from 'react';
import { Tabs } from './Tabs'

interface Icon {
    Url: string;
    TabCode?: Tabs;
}

export default class LeftMenuComponent extends React.Component<any, any>{
    icons: Array<Icon>;

    constructor(props: any) {
        super(props);
        this.initIcons();
        this.state = { activeTab: 'personalInfo' };

        this.tabClick = this.tabClick.bind(this);
    }

    initIcons() {
        this.icons = [{ Url: "./icons/person.svg", TabCode: Tabs.PersonalInfo }, { Url: "./icons/smartphone.svg", TabCode: Tabs.Contacts }, { Url: "./icons/download.svg", TabCode: Tabs.DownloadResume }];
    }

    tabClick(tabCode: Tabs, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        this.props.setNewActiveTab(tabCode);

        if (tabCode == Tabs.DownloadResume) {

        }
    }

    render() {
        return (
            <div className="flex flex-col">
                {
                    this.icons.map((item, i) => (<a onClick={(e) => this.tabClick(item.TabCode, e)}><img className="mx-auto" src={item.Url} alt="personIcon" /></a>))
                }
            </div>);
    }
}