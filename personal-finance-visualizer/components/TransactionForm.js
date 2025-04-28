"use client";

import { useState } from "react";

export default function TransactionForm() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/transactions", {
      method: "POST",
      body: JSON.stringify({ description, amount: parseFloat(amount) }),
      headers: { "Content-Type": "application/json" },
    });

    setDescription("");
    setAmount("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="border p-2 mr-2"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="border p-2 mr-2"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button className="bg-blue-500 text-white p-2 rounded" type="submit">
        Add Transaction
      </button>
    </form>
  );
}
