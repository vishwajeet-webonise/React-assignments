import React from 'react';
export class A extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         date : new Date()
        }
    }
    
    A_tick = () => {
        this.setState({date: new Date()})
    }

    componentDidMount(){
        this.tiemrId = setInterval(() =>this.A_tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.tiemrId)
    }
    
    render() {
        return(
            <div className="A">
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div> 
        );
    }
}