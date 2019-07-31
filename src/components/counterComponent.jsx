import React, { Component } from 'react';

class Counter extends Component {
    render() {
        const { onIncrement, counter, onDecrement, onDelete } = this.props
        return (<div className="container counter-container">
            <div className="row">
                <div className="col-sm m-2 "><h2>{counter.value}</h2></div>
                <div className="col-sm m-2"><button onClick={() => onIncrement(counter)} className="btn btn-primary btn-lg btn-block">+</button></div>
                <div className="col-sm m-2"><button disabled={counter.value ? false : true} onClick={() => onDecrement(counter)} className="btn btn-warning btn-lg btn-block">-</button></div>
                <div className="col-sm m-2"><button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-lg btn-block">delete</button></div>
            </div>
        </div>);
    }
}

export default Counter;