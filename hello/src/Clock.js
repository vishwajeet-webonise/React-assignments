import React from 'react';
export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         date : new Date()
        }
    }

    tick = () => {
        this.setState({date: new Date()})
    }

    componentDidMount(){
        this.tiemrId = setInterval(() =>this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.tiemrId)
    }

    render() {
        return(
            <div>
                <p>{this.state.date.toLocaleString()}</p>
            </div> 
        );
    }
}