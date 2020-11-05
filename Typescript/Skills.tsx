import * as React from 'react'
import ProgressLine from "./ProgressLine";
import { ISkill } from './Models/ISkill';
import { SkillComponentState } from './SkillComponentState';

export default class SkillsComponent extends React.Component<{}, SkillComponentState>{
    constructor(props: {}) {
        super(props);
        this.state = {
            skills: [{ name: "C#", ratingPercent: 100 }, { name: "ASP .Net Core MVC", ratingPercent: 90 }, { name: "ASP .Net Core WebApi", ratingPercent: 90 }
                , { name: "Javascript", ratingPercent: 80 }, { name: "Typescript", ratingPercent: 80 }, { name: "HTML", ratingPercent: 80 }, { name: "CSS", ratingPercent: 80 }
                , { name: "Sass", ratingPercent: 80 }, { name: "WCF", ratingPercent: 70 }, { name: "WPF", ratingPercent: 85 }, { name: "ReactJs", ratingPercent: 65 },
            { name: "Git", ratingPercent: 60 }, { name: "TFS", ratingPercent: 60 }, { name: "JIRA", ratingPercent: 50 }]
        }
    }

    private renderProgressBarForSkill(item: ISkill) {
        return (
            <div>
                <ProgressLine
                    label={item.name}
                    backgroundColor="white"
                    visualParts={[
                        {
                            percentage: `${item.ratingPercent}%`,
                            color: "#20639B"
                        }
                    ]}
                />
            </div>
        );
    }

    public render() {
        return (
            <div className="text-white px-12">
                <h1 className="text-left text-5xl mt-6">Skills</h1>
                <section className="description mt-8 pb-8 border-b border-white text-justify">
                    Svoje dovednosti se snažím neustále rozšiřovat a vylepšovat.
                    Často sleduji nerůznější přednášky a čtu blogy známých i ne tak neznámých vývojářů, od kterých čerpu nové znalosti.
                    Nově nabyté dovednosti se snažím zkoušet v praxi a to ať už v soukromých testovacích projektech nebo i pracovních projektech,
                    pokud to situace dovoluje. Zároveň mám rád práci v týmu, protože můžu předávat svoje znalosti a poznatky dalším a zároveň čerpat ty jejich.
                </section>
                <div className="flex mt-6">
                    <div className="w-1/2">
                        <h2 className="text-2xl">Zkušenosti</h2>
                        {this.state.skills.map((item) => this.renderProgressBarForSkill(item))}
                    </div>
                    <div className="w-1/2">

                    </div>
                </div>
            </div>
        );
    }
} 