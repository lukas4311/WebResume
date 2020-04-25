import * as React from 'react'
import { IExperienceCardProps, ExperienceCardComponent } from './ExperienceCard'

const iconSize: string = '30px';

const arrowLeft = <svg id="Layer_1" className="cursor-pointer fill-current text-white" version="1.1" viewBox="0 0 32 32" width={iconSize}><path d="M7.701,14.276l9.586-9.585c0.879-0.878,2.317-0.878,3.195,0l0.801,0.8c0.878,0.877,0.878,2.316,0,3.194  L13.968,16l7.315,7.315c0.878,0.878,0.878,2.317,0,3.194l-0.801,0.8c-0.878,0.879-2.316,0.879-3.195,0l-9.586-9.587  C7.229,17.252,7.02,16.62,7.054,16C7.02,15.38,7.229,14.748,7.701,14.276z"/></svg>;
const arrowRight = <svg id="Layer_1" className="cursor-pointer fill-current text-white" version="1.1" viewBox="0 0 32 32" width={iconSize}><path d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"/></svg>;

export interface IExperinceCardSliderComponent {
    cards: IExperienceCardProps[]
}

export class ExperinceCardSliderComponent extends React.Component<IExperinceCardSliderComponent, any>{
    itemsCount: number;
    maxItems: number = 3;

    constructor(props: IExperinceCardSliderComponent) {
        super(props);
        this.itemsCount = props.cards.length;

        if (this.itemsCount < this.maxItems)
            this.maxItems = this.itemsCount;

        this.state = { actualIndex: 0, cardsToShow: Array<IExperienceCardProps>() };
        this.clickLeft = this.clickLeft.bind(this);
        this.clickRight = this.clickRight.bind(this);
    }

    componentDidMount() {
        this.showCards(0);
    }

    showCards(index: number) {
        let cardsToShow = [];
        for (let i = 0; i < this.maxItems; i++) {
            if (index < this.itemsCount)
                cardsToShow.push(this.props.cards[index])
            else
                cardsToShow.push(this.props.cards[index - this.itemsCount])

            index++;
        }

        this.setState({ cardsToShow: cardsToShow });
    }

    clickLeft() {
        let newIndex = this.state.actualIndex - 1;

        if (newIndex < 0)
            newIndex = this.itemsCount - 1;

        this.setState((s: any, _: IExperinceCardSliderComponent) => ({ actualIndex: newIndex }));
        this.showCards(newIndex);
    }

    clickRight() {
        let newIndex = this.state.actualIndex + 1;

        if (newIndex > this.itemsCount - 1)
            newIndex = 0;

        this.setState((s: any, _: IExperinceCardSliderComponent) => ({ actualIndex: newIndex }))
        this.showCards(newIndex);
    }

    render() {
        return (
            <div className="flex items-center">
                <div onClick={this.clickLeft} className="w-8">{arrowLeft}</div>
                <div className="flex">
                    {this.state.cardsToShow.map((card: IExperienceCardProps, i: number) => (
                        <div className="w-1/3" key={i}>
                            <ExperienceCardComponent {...card} />
                        </div>
                    ))}
                </div>
                <div className="w-8" onClick={this.clickRight}>{arrowRight}</div>
            </div>
        );
    }
}