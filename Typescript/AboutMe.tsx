import * as React from 'react';

export default class AboutMeComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
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
                <section className="description mt-8 pb-8 border-b border-white">
                    Jsem nadšený .NET a MSSQL developer, který se snaží neustále na sobě makat. Baví mě poznávat nové technologie a zkoušet je v praxi. Mám rád práci v týmu, protože můžu předávat svoje znalosti a poznatky dalším a zároveň čerpat ty jejich. Svoje vědomosti se snažím rozšiřovat čtením odborných knih a článků.
                </section>
                <section>
                    <h2 className="text-xl">Zájmy</h2>
                    <p>Rodina / Programování / Sport / Knihy / <span className="italic text-bold">Bonus one click to reveal</span></p>
                </section>
            </div>
        );
    }
}