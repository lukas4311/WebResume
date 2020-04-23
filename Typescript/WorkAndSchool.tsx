import * as React from 'react';

export default class WorkAndSchoolComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="text-white px-12">
                <h1 className="text-left text-5xl mt-6">Praxe a vzdělání</h1>
                <div className="flex">
                    <div className="w-1/2">
                        <h2>Zkušenosti</h2>
                        <div className="flex">
                            <div className="w-1/4">
                                <h3 className="text-2xl">Erzasoft s.r.o.</h3>
                                <span>05/2013 – 03/2014</span>
                                <p>
                                    Programování a kódování webových stránek za pomoci jazyka C# a
                                    technologií ASP.NET MVC 5.
                                    Další technologie: EntityFramework, MS SQL, Telerik (UI for ASP.NET MVC),
                                    Javascript, HTML5, CSS3 (Sass, Compass), Team foundation server,
                                    Adobe Photoshop
                                </p>
                            </div>

                                TRS s.r.o. 03/2014 – 12/2014
                                Software developer
                                Programování Windows Forms aplikací za pomoci jazyka C#

                                PROFI CREDIT Czech, a. s.01/2015 - 01/2017
                                Software developer
                                Programování .NET aplikací všeho druhu, ale primárně jde o aplikace
                                vytvořené pomocí technologie WPF a ASP.NET MVC 5 a postavené nad MSSQL.
                                Další technologie: JIRA, ASP.NET Core Web API, Javascript, HTML5, CSS3,
                                Team foundation server, WCF, WinService, PHP.

                                PROFI CREDIT Czech, a. s.01/2015 - 01/2017
                                Software developer
                                Programování .NET aplikací všeho druhu, ale primárně jde o aplikace
                                vytvořené pomocí technologie WPF a ASP.NET MVC 5 a postavené nad MSSQL.
                                Další technologie: JIRA, ASP.NET Core Web API, Javascript, HTML5, CSS3,
                                Team foundation server, WCF, WinService, PHP.

                            </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <h2>Vzdělání</h2>
                    <div className="flex">
                        Univerzita Pardubice 05/2010 - 05/2014
                        Fakulta elektrotechniky a informatiky

                        Univerzita Pardubice 05/2010 - 05/2014
                        Fakulta elektrotechniky a informatiky
                        </div>
                </div>
            </div>
        )
    }
}