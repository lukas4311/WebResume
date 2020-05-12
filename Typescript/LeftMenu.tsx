import * as React from 'react';
import { Tabs } from './Tabs'

const personSvg = <svg className="menuIcon" height="50px" id="Layer_1" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M448,448c0,0,0-26.4-2.2-40.2c-1.8-10.9-16.9-25.3-81.1-48.9c-63.2-23.2-59.3-11.9-59.3-54.6c0-27.7,14.1-11.6,23.1-64.2  c3.5-20.7,6.3-6.9,13.9-40.1c4-17.4-2.7-18.7-1.9-27c0.8-8.3,1.6-15.7,3.1-32.7C345.4,119.3,325.9,64,256,64  c-69.9,0-89.4,55.3-87.5,76.4c1.5,16.9,2.3,24.4,3.1,32.7c0.8,8.3-5.9,9.6-1.9,27c7.6,33.1,10.4,19.3,13.9,40.1  c9,52.6,23.1,36.5,23.1,64.2c0,42.8,3.9,31.5-59.3,54.6c-64.2,23.5-79.4,38-81.1,48.9C64,421.6,64,448,64,448h192H448z" /></svg>
const downloadSvg = <svg className="menuIcon" version="1.1" id="Capa_1" x="0px" y="0px" height="50px" viewBox="0 0 950 950"><g><g><path d="M230.493,737.135L451.89,940.982C458.42,946.994,466.71,950,475,950s16.58-3.006,23.11-9.018l221.396-203.85c9.227-8.492,3.216-23.893-9.325-23.893h-59.098V292.99c0-17.739-14.38-32.119-32.119-32.119h-289.62c-16.805,0-30.429,13.623-30.429,30.429v421.938h-59.099C227.277,713.24,221.268,728.641,230.493,737.135z" /><path d="M618.965,130.299h-289.62c-16.805,0-30.429,13.623-30.429,30.429v37.384c0,16.806,13.624,30.429,30.429,30.429h289.62c17.739,0,32.119-14.38,32.119-32.119v-34.005C651.084,144.679,636.704,130.299,618.965,130.299z" /><path d="M651.084,32.119C651.084,14.38,636.704,0,618.965,0h-289.62c-16.805,0-30.429,13.623-30.429,30.429v37.385c0,16.806,13.624,30.429,30.429,30.429h289.62c17.739,0,32.119-14.38,32.119-32.119V32.119z" /></g></g></svg>
const workSvg = <svg className="menuIcon" version="1.1" x="0px" y="0px" viewBox="0 0 1000 1000"><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M3863.4,4047.7c-248-90-420.6-243.1-527.6-476.5c-53.5-116.7-63.2-172.6-70.5-442.5l-9.7-311.2H3100c-150.7,0-155.6,2.4-155.6,60.8c0,99.7-63.2,196.9-155.6,240.7c-109.4,51.1-726.9,55.9-850.9,4.9c-102.1-41.3-160.5-124-160.5-223.7v-75.4l-466.8-12.2c-408.4-12.2-488.7-19.4-610.2-65.6c-179.9-70.5-352.5-209.1-452.2-364.7C109.7,2168.4,100,2102.7,100,1356.3V682.9l68.1-24.3c36.5-12.2,688-250.4,1446.5-525.1l1380.9-500.8h2003.3h2003.3L8383,131c758.5,274.7,1410.1,510.5,1449,525.1l65.6,26.7v673.4c0,525.1-7.3,700.2-36.5,795c-77.8,260.1-296.6,491.1-564,595.6c-124,46.2-199.4,55.9-607.8,65.6l-469.2,9.7v77.8c0,99.7-58.4,182.3-160.4,223.7c-124,51.1-741.5,46.2-850.9-4.9c-92.4-43.8-155.6-141-155.6-240.7c0-58.3-4.9-60.8-155.6-60.8h-155.6l-7.3,311.2c-9.7,291.7-14.6,318.5-90,471.7c-87.5,179.9-231,320.9-413.3,413.3c-114.3,55.9-114.3,55.9-1196.1,60.8C4186.8,4079.2,3933.9,4074.4,3863.4,4047.7z M6073.4,3507.9c150.7-121.6,187.2-206.7,196.9-464.4l9.7-226.1H5001.2H3722.4v165.3c0,299,82.7,466.8,279.6,573.8c63.2,34,192.1,36.5,1026,31.6l950.6-4.9L6073.4,3507.9z" /><path d="M104.9-1529.4l7.3-1645.9l70.5-150.7c85.1-184.7,274.7-372,469.2-464.3l141-65.6h4205.9h4205.9l141,65.6c182.3,85.1,379.3,274.7,469.2,449.8l70.5,141l7.3,1658.1l7.3,1660.5l-262.6-94.8c-145.9-53.5-778-282-1410.1-510.5L7079.9-902.2H4998.8H2917.7L1770.2-486.5C1140.5-257.9,506-29.4,360.1,24.1L100,118.9L104.9-1529.4z" /></g></g></svg>;
const chartSvg = <svg className="menuIcon" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 26.754 26.755"><g><g><rect x="2.497" width="1.801" height="26.755" /><rect x="5.051" y="1.313" width="19.208" height="5.373" /><rect x="5.051" y="7.786" width="16.313" height="5.373" /><rect x="5.051" y="14.002" width="13.76" height="5.376" /><rect x="5.051" y="20.289" width="16.688" height="5.374" /></g></g></svg>;

interface Icon {
    tabCode?: Tabs;
    svgIcon: JSX.Element;
    itemClass: string;
    href: string;
    download: string;
    target: string;
    title: string;
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
        this.icons = [
            { title: "O mě", tabCode: Tabs.PersonalInfo, svgIcon: personSvg, itemClass: '', href: undefined, download: undefined, target: undefined },
            { title: "Zkušenosti", tabCode: Tabs.WorkEducation, svgIcon: workSvg, itemClass: '', href: undefined, download: undefined, target: undefined },
            { title: "Skills", tabCode: Tabs.Skills, svgIcon: chartSvg, itemClass: '', href: undefined, download: undefined, target: undefined },
            { title: "Stáhnout CV", tabCode: Tabs.DownloadResume, svgIcon: downloadSvg, itemClass: '', href: './assets/Salficky_CV.pdf', download: "Salficky_CV.pdf", target: "_blank" }
        ];
    }

    tabClick(tabCode: Tabs, _: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {

        if (tabCode != Tabs.DownloadResume)
            this.props.setNewActiveTab(tabCode);
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