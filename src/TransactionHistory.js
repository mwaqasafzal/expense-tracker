import React from 'react'
import Transaction from './Transaction'

export default function ({ transactions }) {
    return (
        <div>
            <h4 className="center title">Transaction History</h4>
            <hr />
            <ul className="transactions">
                {transactions.map(transaction => (
                    <Transaction
                        key={transaction.id}
                        description={transaction.description}
                        amount={transaction.amount} />
                ))}
            </ul>
        </div >
    );
}
