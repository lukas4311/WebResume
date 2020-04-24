import * as React from 'react';
import { ExperienceCardComponent, IExperienceCardProps } from './ExperienceCard';

export default class WorkAndSchoolComponent extends React.Component<any, any>{
    erzasoftWork: IExperienceCardProps = {
        Description: "Programování a kódování webových stránek za pomoci jazyka C# a technologií ASP.NET MVC 5.",
        From: "05/2013",
        To: "03/2014",
        Name: "Erzasoft s.r.o.",
        Technologies: ["EntityFramework", "MS SQL", "Telerik (UI for ASP.NET MVC)", "Javascript", "HTML5", "CSS3", "Sass", "TFS", "Adobe Photoshop"],
        Position: "Software developer"
    };
    trsWork: IExperienceCardProps = {
        Description: "Programování Windows Forms aplikací za pomoci jazyka C#",
        From: "03/2014",
        To: "12/2014",
        Name: "TRS s.r.o.",
        Technologies: ["EntityFramework", "MS SQL", "Telerik (UI for ASP.NET MVC)", "Javascript", "HTML5", "CSS3", "Sass", "TFS", "Adobe Photoshop"],
        Position: "Software developer"
    };
    proficreditSoftwareDeveloperWork: IExperienceCardProps = {
        Description: "Programování .NET aplikací všeho druhu, ale primárně jde o aplikace vytvořené pomocí technologie WPF a ASP.NET MVC 5 a postavené nad MSSQL.",
        From: "03/2014",
        To: "12/2014",
        Name: "PROFI CREDIT Czech, a. s.",
        Technologies: ["JIRA", "ASP.NET Core", "Web API", "Javascript", "HTML5", "CSS3","Team foundation server", "WCF", "WinService", "PHP"],
        Position: "Software developer"
    };
    proficreditDevelopmentLeaderWork: IExperienceCardProps = {
        Description: "Programování .NET aplikací všeho druhu, ale primárně jde o aplikace vytvořené pomocí technologie WPF a ASP.NET MVC 5 a postavené nad MSSQL.",
        From: "01/2015",
        To: "01/2017",
        Name: "PROFI CREDIT Czech, a. s.",
        Technologies: ["JIRA", "ASP.NET Core", "Web API", "Javascript", "HTML5", "CSS3","Team foundation server", "WCF", "WinService", "PHP"],
        Position: "Software developer"
    };

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="text-white px-12">
                <h1 className="text-left text-5xl mt-6">Praxe a vzdělání</h1>
                <div className="flex flex-col">
                    <div className="w-full">
                        <h2 className="text-2xl">Zkušenosti</h2>
                        <div className="flex mt-4">
                            <ExperienceCardComponent  {...this.erzasoftWork} />
                            <ExperienceCardComponent  {...this.trsWork} />
                            <ExperienceCardComponent  {...this.proficreditSoftwareDeveloperWork} />
                            <ExperienceCardComponent  {...this.proficreditDevelopmentLeaderWork} />
                        </div>
                    </div>
                    <div className="w-full mt-12">
                        <h2 className="text-2xl">Vzdělání</h2>
                        <div className="flex mt-4">
                            Univerzita Pardubice 05/2010 - 05/2014
                            Fakulta elektrotechniky a informatiky

                            Univerzita Pardubice 05/2010 - 05/2014
                            Fakulta elektrotechniky a informatiky
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}