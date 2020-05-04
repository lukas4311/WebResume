import * as React from 'react'

interface ISkill {
    name: string;
    ratingPercent: number;
}

const proggrammingSkillSet: Array<ISkill> = [{ name: "C#", ratingPercent: 100 }, { name: "ASP .Net Core MVC", ratingPercent: 90 }];

export default class SkillsComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    renderProgressBarForSkill(item: ISkill, index: number) {
        return (
            <div>
                <p>{item.name}</p>
                <div className="w-full bg-gray-300">
                    <div className={`bg-mainBlue text-xs leading-none py-1 text-center text-white w-${item.ratingPercent/10}/10`}>{item.ratingPercent}%</div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="text-white px-12">
                <h1 className="text-left text-5xl mt-6">Skills</h1>
                <section className="description mt-8 pb-8 border-b border-white text-justify">
                    Jsem nadšený .NET a MSSQL developer, který se snaží neustále na sobě makat. Baví mě poznávat nové technologie a zkoušet je v praxi. Mám rád práci v týmu, protože můžu předávat svoje znalosti a poznatky dalším a zároveň čerpat ty jejich. Svoje vědomosti se snažím rozšiřovat čtením odborných knih a článků.
                </section>
                <div className="flex mt-6">
                    <div className="w-1/2">
                        <h2 className="text-2xl">Zkušenosti</h2>
                        {proggrammingSkillSet.map((item, i) => this.renderProgressBarForSkill(item, i))}
                    </div>
                    <div className="w-1/2">

                    </div>
                </div>
            </div>
        );
    }
} 