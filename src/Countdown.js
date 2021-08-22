import React, {Component} from 'react';


class Countdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            days: 0
        }
        this.counter = this.counter.bind(this)
    }

    componentDidMount() {
        setInterval(this.counter, 1000) 
   }
    
   counter() {
        const currentDay = new Date();
        const NewYearsDay = new Date('January 1, 2022 00:00:00');
        let currentTime = currentDay.getTime();
        let NewYearsTime = NewYearsDay.getTime();
        let time = NewYearsTime - currentTime;
        let secondscalc = Math.floor(time/1000);
        let mincalc = Math.floor(secondscalc/60);
        let hourscalc = Math.floor(mincalc/60);
        let dayscalc = Math.floor(hourscalc/24);
    
        hourscalc = hourscalc % 24;
        mincalc = mincalc % 60;
        secondscalc = secondscalc % 60;

        this.setState({
                seconds: secondscalc,
                minutes: mincalc,
                hours: hourscalc,
                days: dayscalc
        })}

    render() {
    
        return (
            <div>
                <h1>New Year's Countdown</h1>
                <div className="flex-container">
                    <div><h2>Days: {this.state.days}</h2></div>
                    <div><h2>Hours: {this.state.hours}</h2></div>
                    <div><h2>Minutes: {this.state.minutes}</h2></div>
                    <div><h2>Seconds: {this.state.seconds}</h2></div>
                </div>
            </div>
        )
    }
}

export default Countdown