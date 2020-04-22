import * as React from 'react';

export default class WorkAndSchoolComponent extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="text-white px-12">
                <h1 className="text-left text-5xl mt-6">Praxe a vzdělání</h1>
            </div>
        )
    }
}