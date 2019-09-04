import React, { Component } from 'react';

class ExpenseSaver extends Component {
    state = {
        expenses: [
            {
                id: 1,
                date: '20th feb, 2018',
                value: 200,
                reason: 'for phone purchase'
            },
            {
                id: 2,
                date: '22th feb, 2018',
                value: 300,
                reason: 'for car purchase'
            },
            {
                id: 3,
                date: '23th feb, 2018',
                value: 400,
                reason: 'for house purchase'
            }
        ]
    }
    render() {

        return (
            <div>
                < table className="table table-hover" >
                    <thead className="border table-primary">
                        <tr>
                            <th scope="col">Value</th>
                            <th scope="col">Reason</th>
                            <th scope="col">date</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.expenses.map(expense => {
                            return (
                                <tr key={expense.id}>
                                    <td><span>{expense.value}</span></td>
                                    <td><span>{expense.reason}</span></td>
                                    <td><span>{expense.date}</span></td>
                                    <td><button className="btn-info">Edit</button></td>
                                    <td><button className="btn-danger">Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table >
            </div>);
    }
}

export default ExpenseSaver;