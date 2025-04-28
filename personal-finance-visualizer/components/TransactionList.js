"use client";

import { useEffect, useState } from "react";

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchTransactions() {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      setTransactions(data);
    }

    fetchTransactions();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction._id} className="mb-1">
            {transaction.description}: ₹{transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
