import React from 'react'

export default function ({ income, expense }) {
    return (
        <div className="inc-exp">
            <div className="inc">
                <p>Income</p>
                <p className="amount">$ {income.toFixed(2)}</p>
            </div>
            <div className="exp">
                <p>Expense</p>
                <p className="amount">$ {expense.toFixed(2)}</p>
            </div>
        </div>
    );
}