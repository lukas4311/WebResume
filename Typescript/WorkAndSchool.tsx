﻿import * as React from 'react';
import { IExperienceCardProps } from "./Models/IExperienceCardProps";
import { ExperinceCardSliderComponent } from './ExperienceCardSlider'
import { useMediaQuery } from 'react-responsive'

const erzasoftWork: IExperienceCardProps = {
    Description: "Programování a kódování webových stránek za pomoci jazyka C# a technologií ASP.NET MVC 5.",
    DescriptionHtml:
        <p>
            V Erasoftu jsme se věnovi vývoji a kódování webových stránek na múru za pomoci jazyka C# a technologie ASP.NET MVC 5.
            Mimo tyto technologie jsem také běžne používal také HTML5, Javascript, Sass pro kódování stránek.
        </p>,
    From: "05/2013",
    To: "03/2014",
    Name: "Erzasoft s.r.o.",
    Technologies: ["EntityFramework", "MS SQL", "Telerik (UI for ASP.NET MVC)", "Javascript", "HTML5", "CSS3", "Sass", "TFS", "Adobe Photoshop"],
    Position: "Software developer"
};

const trsWork: IExperienceCardProps = {
    Description: "Programování Windows Forms aplikací za pomoci jazyka C#",
    DescriptionHtml: <p>Zde jsem se věnoval vývoji Windows Forms aplikace za pomoci jazyka C#.</p>,
    From: "03/2014",
    To: "12/2014",
    Name: "TRS s.r.o.",
    Technologies: ["Windows Forms"],
    Position: "Software developer"
};

const proficreditSoftwareDeveloperWork: IExperienceCardProps = {
    Description: "Programování různých typů .NET aplikací. Primárně se jednalo o aplikace vytvořené pomocí technologie WPF a ASP.NET MVC 5 nebo Core. Apliakce pod sebou měly postavnou MSSQL.",
    DescriptionHtml:
        <div>
            <p>
                Jako software developer jsem se podílel na vývoji různých typů aplikací na .NET platformě.
                Primárně se jednalo o aplikace vytvořené pomocí technologie ASP NET MVC 5, WPF a WCF. K verzování zdrojového kódu jsem využívali TFS.
                Data jsem ukládali do MSSSQL databáze. Můj první větší projekt byl klientský portál, na kterém jsem dělal vyvíjel jsem ho pomoci technologie ASP .NET MVC 5.
                Tento projekt jsem před svým odchodem přepisoval do .NET Core. Také jsme se podílel na vývoji našeho SOAP API pomocí WCF technologie. Mimo to se náš tým věnoval
                vývoji REST API za pomoci ASP NET Core WebAPI, což byl také první .NET Core projekt v naší firmě, který se produkčně nasadil. Mimo to jsem se věnoval vývoji modulů
                do našeho interního systému napsaného v WPF techonologii a MVVM patternu.
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
                I s novou pozicí jsem se primárně věnoval programování projektů, které jsem v teamu měli na starost. Vyvíjeli jsme primárně ASP NET Core MVC,
                ASP NET Core WebApi a WPF. Pod ruma nám prošla spousta velých jako nové REST API pomocí technologie ASP .NET Core WebAPI nové moduly pro náš interní systém
                nebo přepis klientského portálu do .NET Core. Mimo to jsem se začal věnovat code review pro programátory v našem teamu a snažil jsem se hlídat, aby kód který odpoštěl náš
                tým byl čistý a spolňoval SOLID principy. Jako developement leader jsem měl možnost rozhodovat o architektuře aplikace a použité technologii.
                Také jsem se více zapojoval do vývoje našich core projektů a diskuze o těchto projektech. V našem teamu probíhal vývoj plně agilně a k plánování sprintů
                jsme používali JIRU.
            </p>
        </div>,
    From: "01/2017",
    To: "09/2020",
    Name: "PROFI CREDIT Czech, a. s.",
    Technologies: ["JIRA", "ASP.NET Core", "Web API", "Javascript", "HTML5", "CSS3", "Team foundation server", "WCF", "WinService", "PHP"],
    Position: "Developement leader"
};

const dakoSoftwareDeveloper: IExperienceCardProps = {
    Description: "",
    DescriptionHtml:
        <div>
            <p>
                Mojí hlavní pracovní náplní je vývoj aplikací primárně za pomoci technologie ASP.NET Core a to primárně WebApi, ale také MVC.
                Vyvíjíme hlavně úplně nový interní portál, kterýslouží jako vizuální stránka pro obsluhu nejrůznějších akcí. Tím pádem se také
                mnohem více věnuji vývoji frontendu a tam využívám framework ReactJs a Typescript. Mimo to jsem se také věnoval
                nastavení branch stategy našeho GIT repository, které by nám vyhovovalo a základnímu nastavení DevOps pipeline pro automatické buildy.
            </p>
        </div>,
    From: "09/2020",
    To: "současnost",
    Name: "DAKO-CZ, a.s.",
    Technologies: ["ASP.NET Core", "Web API", "ReactJs", "Typescript", "HTML5", "CSS3", "GIT", "SignalR", "DevOps"],
    Position: "Software developer"
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

const WorkAndSchoolComponent = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 640px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 641px) and (max-width: 1023px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' })
    const cards = [dakoSoftwareDeveloper, proficreditDevelopmentLeaderWork, proficreditSoftwareDeveloperWork, trsWork, erzasoftWork];
    const education = [university, highSchool];

    return (
        <div className="text-white px-12">
            <h1 className="text-left text-5xl mt-6">Praxe a vzdělání</h1>
            <div className="flex flex-col">
                <div className="w-full">
                    <h2 className="text-2xl">Zkušenosti</h2>
                    <div className="flex mt-4">
                        {isDesktop && <ExperinceCardSliderComponent maxItemsCount={3} cards={cards} />}
                        {isTablet && <ExperinceCardSliderComponent maxItemsCount={2} cards={cards} />}
                        {isMobile && <ExperinceCardSliderComponent maxItemsCount={1} cards={cards} />}
                    </div>
                </div>
                <div className="w-full mt-12">
                    <h2 className="text-2xl">Vzdělání</h2>
                    <div className="flex mt-4">
                        {isDesktop && <ExperinceCardSliderComponent maxItemsCount={3} cards={education} />}
                        {isTablet && <ExperinceCardSliderComponent maxItemsCount={2} cards={education} />}
                        {isMobile && <ExperinceCardSliderComponent maxItemsCount={1} cards={education} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkAndSchoolComponent