import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transcations, handleDeleteTransactions, handleSort}) {
  const {id}= transcations    
  const handleDeletions = async (id) =>{
        console.log(id);
        try{
          const response = await fetch("http://localhost:8001/transactions/" + id, {
            method: "DELETE",
          });
          
          handleDeleteTransactions(id);
        }catch (error){
          console.log(error);
        }
      };
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={handleSort}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header"onClick={handleSort}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {transcations.map((transaction) =>
          <Transaction
            key={transaction.id}
            handleDeletions={handleDeletions}
            transaction={transaction} />)}
      </tbody>
    </table>
  );
}

export default TransactionsList;
