import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions, handleDeleteTransactions, handleAddTransaction, handleSearch}) {
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm transactions={transactions} handleAddTransaction={handleAddTransaction} />
      <TransactionsList transcations={transactions} handleDeleteTransactions={handleDeleteTransactions} />
    </div>
  );
}

export default AccountContainer;
