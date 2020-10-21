import { Tabs } from './Tabs';

export interface Icon {
    tabCode?: Tabs;
    svgIcon: JSX.Element;
    itemClass: string;
    href: string;
    download: string;
    target: string;
    title: string;
}
