import React, { Component } from 'react';
import Counter from './counterComponent'

class Counters extends Component {
    render() {
        const { onIncrement, counters, onDecrement, onDelete, onReset } = this.props
        return (
            <div>
                <div className="m-2">
                    <button onClick={() => onReset()} className="btn btn-info btn-lg m-2">Reset</button>
                </div>
                {counters.map(counter => {
                    return (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onDelete={onDelete}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Counters;