import * as React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { ExperienceCardComponent } from './ExperienceCard'
import SvgIcons from './Icons/SvgIcons';
import { IExperinceCardSliderComponent } from './IExperinceCardSliderComponent';
import { IExperienceCardProps } from "./Models/IExperienceCardProps";

export class ExperinceCardSliderComponent extends React.Component<IExperinceCardSliderComponent, any>{
    private itemsCount: number;
    private maxItems: number;
    private animationDirection: string = 'flex left';

    constructor(props: IExperinceCardSliderComponent) {
        super(props);
        this.itemsCount = props.cards.length;
        this.maxItems = props.maxItemsCount;

        if (this.itemsCount < this.maxItems)
            this.maxItems = this.itemsCount;

        this.state = { actualIndex: 0, cardsToShow: Array<IExperienceCardProps>() };
    }

    public componentDidMount() {
        this.showCards(0);
    }

    private showCards(index: number) {
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

    private clickLeft = () => {
        let newIndex = this.state.actualIndex - 1;
        this.animationDirection = 'flex left ' + newIndex;

        if (newIndex < 0)
            newIndex = this.itemsCount - 1;

        this.setState((s: any, _: IExperinceCardSliderComponent) => ({ actualIndex: newIndex }));
        this.showCards(newIndex);
    }

    private clickRight = () => {
        let newIndex = this.state.actualIndex + 1;
        this.animationDirection = 'flex right ' + newIndex;

        if (newIndex > this.itemsCount - 1)
            newIndex = 0;

        this.setState((s: any, _: IExperinceCardSliderComponent) => ({ actualIndex: newIndex }))
        this.showCards(newIndex);
    }

    public render() {
        const timeout = { enter: 800, exit: 400 };
        let showArrows: boolean = this.props.cards.length > this.maxItems;

        return (
            <div className="flex items-center w-full">
                { showArrows ? <div onClick={this.clickLeft} className="w-8">{SvgIcons.arrowLeft}</div> : ""}
                <TransitionGroup component="div" className="app border-t border-white pt-4 w-full overflow-hidden">
                    <CSSTransition key={this.animationDirection} timeout={timeout} classNames="pageSlider" mountOnEnter={false} unmountOnExit={true}>
                        <div className={this.animationDirection}>
                            {this.state.cardsToShow.map((card: IExperienceCardProps, i: number) => (
                                <div className={`w-1/${this.props.maxItemsCount} page p-2 bg-buttonsGray rounded-lg m-2 shadows duration-500`} key={i}>
                                    <ExperienceCardComponent {...card} />
                                </div>
                            ))}
                        </div>
                    </CSSTransition>
                </TransitionGroup>
                { showArrows ? <div className="w-8" onClick={this.clickRight}>{SvgIcons.arrowRight}</div> : ""}
            </div>
        );
    }
}