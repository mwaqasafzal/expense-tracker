import React from 'react'

export default function ({ totalBalance }) {
    return (
        <div className="current-balance center">
            <h3>Current Balance</h3>
            <h3>$ {totalBalance.toFixed(2)}</h3>
        </div>
    );

}