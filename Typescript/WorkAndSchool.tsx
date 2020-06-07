import * as React from 'react';
import { IExperienceCardProps } from './ExperienceCard';
import { ExperinceCardSliderComponent } from './ExperienceCardSlider'
import { useMediaQuery } from 'react-responsive'

const erzasoftWork: IExperienceCardProps = {
    Description: "Programování a kódování webových stránek za pomoci jazyka C# a technologií ASP.NET MVC 5.",
    DescriptionHtml:
        <p>
            V Erasoftu jsme se věnovi vývoji a kódování webových stránek za pomoci jazyka C# a technologií ASP.NET MVC 5.
            Mimo tyto technologie jsem používal také HTML5, Javascript, Sass pro kódování stránek.
        </p>,
    From: "05/2013",
    To: "03/2014",
    Name: "Erzasoft s.r.o.",
    Technologies: ["EntityFramework", "MS SQL", "Telerik (UI for ASP.NET MVC)", "Javascript", "HTML5", "CSS3", "Sass", "TFS", "Adobe Photoshop"],
    Position: "Software developer"
};
const trsWork: IExperienceCardProps = {
    Description: "Programování Windows Forms aplikací za pomoci jazyka C#",
    DescriptionHtml: <p>Programování Windows Forms aplikací za pomoci jazyka C#</p>,
    From: "03/2014",
    To: "12/2014",
    Name: "TRS s.r.o.",
    Technologies: ["EntityFramework", "MS SQL", "Telerik (UI for ASP.NET MVC)", "Javascript", "HTML5", "CSS3", "Sass", "TFS", "Adobe Photoshop"],
    Position: "Software developer"
};
const proficreditSoftwareDeveloperWork: IExperienceCardProps = {
    // Description: "Programování .NET aplikací všeho druhu, ale primárně jde o aplikace vytvořené pomocí technologie WPF a ASP.NET MVC 5 a postavené nad MSSQL.",
    Description: "Programování různých typů .NET aplikací. Primárně se jednalo o aplikace vytvořené pomocí technologie WPF a ASP.NET MVC 5 nebo Core. Apliakce pod sebou měly postavnou MSSQL.",
    DescriptionHtml:
        <div>
            <p>
                Jako software developer jsem se podílel na vývoji různých typů aplikací na .NET platformě.
                Primárně se jednalo o aplikace vytvořené pomocí technologie ASP NET MVC 5, WPF a WCF. K verzování zdrojového kódu jsem využívali TFS.
                Aplikace spolupracovaly s MSSQL databází.
            </p>
        </div>,
    From: "01/2015",
    To: "01/2017",
    Name: "PROFI CREDIT Czech, a. s.",
    Technologies: ["JIRA", "ASP.NET Core", "Web API", "Javascript", "HTML5", "CSS3", "Team foundation server", "WCF", "WinService", "PHP"],
    Position: "Software developer"
};
const proficreditDevelopmentLeaderWork: IExperienceCardProps = {
    Description: "Jako development leader jsem se stal členem malého týmu. Mojí rolí je kromě standartního vývoje, také v rámci možností rozhodovat o architektuře aplikace a použité technologii. Součástí mé práce se také stalo code review, které se snažím dělat pro programátory mého týmu.",
    DescriptionHtml:
        <div>
            <p>
                S novou pozicí přišla nová zodpovědnost. Po rozšíření IT oddělení a rozdělení na malé teamy jsem se stal development leaderem jednoho z nich.
                I s novou pozicí jsem se primárně věnoval programování projektů, které jsem v teamu měli na starost. Vyvíjeli jsme primárně ASP NET Core MVC, ASP NET Core WebApi a WPF.
                Mimo to jsem se začal věnovat code review pro programátory v našem teamu a jako developement leader jsem měl možnost rozhodovat o architektuře aplikace a použité technologii.
                Také jsem se více zapojoval co vývoje našich core projektů a diskuze o těchto projektech. V našem teamu probíhal vývoj plně agilně.
            </p>
        </div>,
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
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1023px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })

    return (
        <div className="text-white px-12">
            <h1 className="text-left text-5xl mt-6">Praxe a vzdělání</h1>
            <div className="flex flex-col">
                <div className="w-full">
                    <h2 className="text-2xl">Zkušenosti</h2>
                    <div className="flex mt-4">
                        {isDesktop && <ExperinceCardSliderComponent maxItemsCount={3} cards={[erzasoftWork, trsWork, proficreditSoftwareDeveloperWork, proficreditDevelopmentLeaderWork]} />}
                        {isTablet && <ExperinceCardSliderComponent maxItemsCount={2} cards={[erzasoftWork, trsWork, proficreditSoftwareDeveloperWork, proficreditDevelopmentLeaderWork]} />}
                        {isMobile && <ExperinceCardSliderComponent maxItemsCount={1} cards={[erzasoftWork, trsWork, proficreditSoftwareDeveloperWork, proficreditDevelopmentLeaderWork]} />}
                    </div>
                </div>
                <div className="w-full mt-12">
                    <h2 className="text-2xl">Vzdělání</h2>
                    <div className="flex mt-4">
                        {isDesktop && <ExperinceCardSliderComponent maxItemsCount={3} cards={[highSchool, university]} />}
                        {isTablet && <ExperinceCardSliderComponent maxItemsCount={2} cards={[highSchool, university]} />}
                        {isMobile && <ExperinceCardSliderComponent maxItemsCount={1} cards={[highSchool, university]} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkAndSchoolComponent