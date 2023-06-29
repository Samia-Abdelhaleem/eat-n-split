import React, { useState } from "react";
import Button from "./Button";

const BillForm = ({ selectedFriend, onAddBill, resetBill }) => {
  const { name, imgUrl, balance, id } = selectedFriend;
  const { billValue, userExpenseValue, whoPayValue } = resetBill;
  const [bill, setBill] = useState(billValue || "");
  const [userExpense, setUserExpense] = useState(userExpenseValue || "");
  const [whoPay, setWhoPay] = useState(whoPayValue || "user");
  const friendExpense = bill ? Number(bill) - Number(userExpense) : "";

  function handleAddBill(e) {
    e.preventDefault();
    if (!bill || !userExpense) return;
    const updatedFriend = {
      ...selectedFriend,
      balance: selectedFriend.balance + getUpdatedBalance(),
    };
    onAddBill(updatedFriend);
  }

  function getUpdatedBalance() {
    return whoPay === "user" ? Number(friendExpense) : -Number(userExpense);
    // if (whoPay === "user") return Number(friendExpense);
    // else return -Number(userExpense);
  }

  return (
    <form className="form-split-bill" onSubmit={handleAddBill}>
      <h2>spilt bill with {name} </h2>

      <label> 💰bill value </label>
      <input
        type="text"
        name=""
        id=""
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label> 🧍‍♀️ your expense </label>
      <input
        type="text"
        name=""
        id=""
        value={userExpense}
        onChange={(e) =>
          setUserExpense(
            Number(e.target.value) > bill ? userExpense : Number(e.target.value)
          )
        }
      />

      <label> 👫 {name} 's expense </label>
      <input
        type="text"
        name=""
        id=""
        disabled
        value={friendExpense.toString()}
      />

      <label> 🤑 who is paying for the bill ? </label>
      <select
        name=""
        id=""
        value={whoPay}
        onChange={(e) => setWhoPay(e.target.value)}
      >
        <option value="user"> you</option>
        <option value="friend"> {name}</option>
      </select>

      <Button>split bill </Button>
    </form>
  );
};

export default BillForm;
