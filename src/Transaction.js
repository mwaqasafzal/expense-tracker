import React from 'react'

export default function ({ description, amount }) {
    let classes = ["transaction"];
    classes.push(amount < 0 ? "expense" : "income");

    return (
        <li className={classes.join(" ")}>
            <p>{description}</p>
            <p className="amount">$ {amount}</p>
        </li>);
}