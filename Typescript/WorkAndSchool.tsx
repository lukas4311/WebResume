import * as React from 'react';
import { IExperienceCardProps } from './ExperienceCard';
import { ExperinceCardSliderComponent } from './ExperienceCardSlider'
import { useMediaQuery } from 'react-responsive'

const erzasoftWork: IExperienceCardProps = {
    Description: "Programování a kódování webových stránek za pomoci jazyka C# a technologií ASP.NET MVC 5.",
    From: "05/2013",
    To: "03/2014",
    Name: "Erzasoft s.r.o.",
    Technologies: ["EntityFramework", "MS SQL", "Telerik (UI for ASP.NET MVC)", "Javascript", "HTML5", "CSS3", "Sass", "TFS", "Adobe Photoshop"],
    Position: "Software developer"
};
const trsWork: IExperienceCardProps = {
    Description: "Programování Windows Forms aplikací za pomoci jazyka C#",
    From: "03/2014",
    To: "12/2014",
    Name: "TRS s.r.o.",
    Technologies: ["EntityFramework", "MS SQL", "Telerik (UI for ASP.NET MVC)", "Javascript", "HTML5", "CSS3", "Sass", "TFS", "Adobe Photoshop"],
    Position: "Software developer"
};
const proficreditSoftwareDeveloperWork: IExperienceCardProps = {
    Description: "Programování .NET aplikací všeho druhu, ale primárně jde o aplikace vytvořené pomocí technologie WPF a ASP.NET MVC 5 a postavené nad MSSQL.",
    From: "01/2015",
    To: "01/2017",
    Name: "PROFI CREDIT Czech, a. s.",
    Technologies: ["JIRA", "ASP.NET Core", "Web API", "Javascript", "HTML5", "CSS3", "Team foundation server", "WCF", "WinService", "PHP"],
    Position: "Software developer"
};
const proficreditDevelopmentLeaderWork: IExperienceCardProps = {
    Description: "Jako development leader jsem se stal členem malého týmu. Mojí rolí je kromě standartního vývoje, také v rámci možností rozhodovat o architektuře aplikace a použité technologii. Součástí mé práce se také stalo code review, které se snažím dělat pro programátory mého týmu.",
    From: "01/2017",
    To: "současnost",
    Name: "PROFI CREDIT Czech, a. s.",
    Technologies: ["JIRA", "ASP.NET Core", "Web API", "Javascript", "HTML5", "CSS3", "Team foundation server", "WCF", "WinService", "PHP"],
    Position: "Developement leader"
};
const highSchool: IExperienceCardProps = {
    Description: undefined,
    From: "05/2006",
    To: "05/2010",
    Name: "Střední průmyslová škola elektrotechnická",
    Technologies: [],
    Position: undefined
};
const university: IExperienceCardProps = {
    Description: undefined,
    From: "05/2010",
    To: "05/2014",
    Name: "Univerzita Pardubice - Fakulta elektrotechniky a informatiky",
    Technologies: [],
    Position: undefined
};

const WorkAndSchoolComponent = (props: any) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <div className="text-white px-12">
            <h1 className="text-left text-5xl mt-6">Praxe a vzdělání</h1>
            <div className="flex flex-col">
                <div className="w-full">
                    <h2 className="text-2xl">Zkušenosti</h2>
                    <div className="flex mt-4">
                        {!isTabletOrMobile && <ExperinceCardSliderComponent maxItemsCount={2} cards={[erzasoftWork, trsWork, proficreditSoftwareDeveloperWork, proficreditDevelopmentLeaderWork]} />}
                        {isTabletOrMobile && <ExperinceCardSliderComponent maxItemsCount={1} cards={[erzasoftWork, trsWork, proficreditSoftwareDeveloperWork, proficreditDevelopmentLeaderWork]} />}
                    </div>
                </div>
                <div className="w-full mt-12">
                    <h2 className="text-2xl">Vzdělání</h2>
                    <div className="flex mt-4">
                        { !isTabletOrMobile && <ExperinceCardSliderComponent maxItemsCount={2} cards={[highSchool, university]} />}
                        { isTabletOrMobile && <ExperinceCardSliderComponent maxItemsCount={1} cards={[highSchool, university]} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkAndSchoolComponent