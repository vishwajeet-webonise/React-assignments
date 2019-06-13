import React from 'react';
export class B extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         date : new Date()
        }
    }

    B_tick = () => {
        this.setState({date: new Date()})
    }

    componentDidMount(){
        this.tiemrId = setInterval(() =>this.B_tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.tiemrId)
    }

    render() {
        return(
            <div className="B">
                <p>{this.state.date.toLocaleString()}</p>
            </div> 
        );
    }
}