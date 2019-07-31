import React, { Component } from 'react';
import Counters from './countersComponent';
import NavBar from './navBar';

class CounterApp extends Component {
    state = {
        counters: [
            {
                id: 1,
                value: 2
            },
            {
                id: 2,
                value: 2
            },
            {
                id: 3,
                value: 0
            }
        ]
    }

    handleIncrement = (counter) => {
        const counters = this.state.counters;
        const index = counters.indexOf(counter);
        counters[index].value += 1
        this.setState({
            counters
        })
    }
    handleDecrement = (counter) => {
        const counters = this.state.counters;
        const index = counters.indexOf(counter);
        counters[index].value -= 1
        this.setState({
            counters
        })
    }
    handleDelete = (id) => {
        const counters = this.state.counters.filter(counter => counter.id !== id)
        this.setState({
            counters
        })
    }
    handleRest = () => {
        const counters = this.state.counters.map(counter => {
            return (
                {
                    id: counter.id,
                    value: 0
                }
            )
        })
        this.setState({
            counters
        })

    }

    render() {
        return (<div>
            <NavBar counters={this.state.counters} />
            <Counters
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                onReset={this.handleRest}
                counters={this.state.counters}

            />
        </div>);
    }
}

export default CounterApp;