import React, { useState } from 'react'
import CurrentBal from './CurrentBal'
import IncExp from './IncExp'
import TransactionHistory from './TransactionHistory'
import NewTransaction from './NewTransaction'

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalInc, setTotalInc] = useState(0.0);
  const [totalExp, setTotalExp] = useState(0.0);

  const addTransaction = (transaction) => {
    const { amount } = transaction;
    if (amount < 0)
      setTotalExp(totalExp + amount);
    else
      setTotalInc(totalInc + amount);

    setTransactions(transactions.concat(transaction));
  }


  return (

    <div className="App">
      <h1 className="center">Expense Tracker</h1>
      <CurrentBal totalBalance={totalExp + totalInc} />
      <IncExp income={totalInc} expense={Math.abs(totalExp)} />
      <TransactionHistory transactions={transactions} />
      <NewTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
