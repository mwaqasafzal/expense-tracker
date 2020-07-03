import React, { useState } from 'react'
import { genUniqueId } from './utils/helpers'
export default function ({ addTransaction }) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState(0.0);

    const textChangeHandler = (type, value) => {
        if (type === "desc")
            setDescription(value);
        else
            setAmount(value);
    }
    const createTransaction = () => {
        const transaction = {
            id: genUniqueId(),
            description,
            amount: amount * 1
        }
        addTransaction(transaction);
        //updating fields with empty string
        setDescription("");
        setAmount("")
    }
    return (
        <div className="new-transaction" >
            <h4 className="center title">Add Transaction</h4>
            <hr />
            <div className="add-transaction">
                <label htmlFor="desc" >Description</label>
                <input
                    type="text"
                    name="desc"
                    value={description}
                    onChange={e => textChangeHandler('desc', e.target.value)}
                    placeholder="Description of Transaction" />
                <label htmlFor="amount" >Amount</label>
                <input
                    type="number"
                    name="amount"
                    onChange={e => textChangeHandler('amount', e.target.value)}
                    value={amount}
                    placeholder="Transaction Amount" />
                <button
                    disabled={description.length === 0 || amount === 0}
                    onClick={() => createTransaction()} >
                    Add Transaction</button>
            </div>
        </div >

    );
}