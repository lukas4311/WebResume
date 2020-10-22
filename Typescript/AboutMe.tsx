import * as React from 'react';
import { InterestsCard } from './InterestsCard'
import { IInterestsCardProps } from "./Models/IInterestsCardProps";
import SvgIcons from './Icons/SvgIcons'

export default class AboutMeComponent extends React.Component<{}, any>{
    constructor(props: {}) {
        super(props);
        let interestsObjects: Array<IInterestsCardProps> = new Array<IInterestsCardProps>();
        interestsObjects.push({ svgIcon: SvgIcons.familyIcon, title: "Rodina" }, { svgIcon: SvgIcons.programmingIcon, title: "Programování" },
            { svgIcon: SvgIcons.sportIcon, title: "Sport" }, { svgIcon: SvgIcons.bookIcon, title: "Knihy" }, { svgIcon: SvgIcons.bitcoinIcon, title: "Bitcoin" }
        );
        this.state = { interests: interestsObjects };
    }

    render() {
        return (
            <div className="text-white px-12">
                <h1 className="text-left text-5xl mt-6">O mě</h1>
                <div className="flex w-5/12 italic justify-between">
                    <span>Pardubice</span>
                    <span>/</span>
                    <span>Developer</span>
                    <span>/</span>
                    <span>29y</span>
                </div>
                <section className="description mt-8 pb-8 border-b border-white text-justify">
                    Jsem full stack .NET a MSSQL developer s více než 6 letou praxí. 
                    Baví mě poznávat nové technologie a zkoušet je v praxi. Neustále se na sobě pracuji, vylpešuji a rozšiřuji svoje dovednosti.
                </section>
                <section className="mt-8 pb-8 border-b border-white">
                    <h2 className="text-xl">Kontakty</h2>
                    <div className="flex justify-around">
                        <div className="text-center">
                            {SvgIcons.phoneIcon}
                            <p>732 725 818</p>
                        </div>
                        <div className="text-center">
                            {SvgIcons.mailIcon}
                            <a className="text-white block" href="mailto:salficky.job@gmail.com">salficky.job@gmail.com</a>
                        </div>
                        <div className="text-center"> 
                            {SvgIcons.linkedInIcon}
                            <a className="text-white block" href="http://www.linkedin.com/in/salfickylukas">LinkedIn</a>
                        </div>
                    </div>
                </section>
                <section className="mt-8">
                    <h2 className="text-xl">Zájmy</h2>
                    <div className="flex flex-wrap justify-around">
                        {this.state.interests.map((item: IInterestsCardProps, i: number) => <InterestsCard key={i} {...item} />)}
                    </div>
                </section>
            </div>
        );
    }
}