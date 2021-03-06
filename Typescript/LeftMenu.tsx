﻿import * as React from 'react';
import { Tabs } from './Models/Tabs';
import SvgIcons from './Icons/SvgIcons';
import { Icon } from './Models/Icon';
import { LeftMenuComponentProps } from './LeftMenuComponentProps';
import { LeftMenuComponentState } from './LeftMenuComponentState';

export default class LeftMenuComponent extends React.Component<LeftMenuComponentProps, LeftMenuComponentState>{
    icons: Array<Icon>;

    constructor(props: LeftMenuComponentProps) {
        super(props);
        this.initIcons();
        this.state = { activeTab: 'personalInfo' };
    }

    private initIcons = () => {
        this.icons = [
            { title: "O mě", tabCode: Tabs.PersonalInfo, svgIcon: SvgIcons.personSvg, itemClass: '', href: undefined, download: undefined, target: undefined },
            { title: "Zkušenosti", tabCode: Tabs.WorkEducation, svgIcon: SvgIcons.workSvg, itemClass: '', href: undefined, download: undefined, target: undefined },
            { title: "Skills", tabCode: Tabs.Skills, svgIcon: SvgIcons.chartSvg, itemClass: '', href: undefined, download: undefined, target: undefined },
            { title: "Stáhnout CV", tabCode: Tabs.DownloadResume, svgIcon: SvgIcons.downloadSvg, itemClass: '', href: './assets/Salficky_CV.pdf', download: "Salficky_CV.pdf", target: "_blank" }
        ];
    }

    private tabClick = (tabCode: Tabs, _: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if (tabCode != Tabs.DownloadResume) {
            this.props.setNewActiveTab(tabCode);
            if (window.matchMedia('(max-width: 1024px)').matches) {
                document.getElementById("menu").style.display = "none";
            }
        }
    }

    render() {
        return (
            <div className="flex flex-col h-full justify-center">
                {
                    this.icons.map((item, i) => (
                        <div key={i} className={`text-center p-2 ${item.itemClass}`}>
                            <a href={item.href} className="tabLink inline-block" onClick={(e) => this.tabClick(item.tabCode, e)} target={item.target} download={item.download}>
                                {item.svgIcon}
                            </a>
                            <span className="text-white leading-none block opacity-0 duration-500">{item.title}</span>
                        </div>))
                }
            </div>);
    }
}