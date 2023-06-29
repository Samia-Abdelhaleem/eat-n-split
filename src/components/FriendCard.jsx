import React from "react";
import Button from "./Button";

const FriendCard = ({
  friend,
  onSelectFriend,
  selectedFriendId,
  onshowAddFriend,
  onResetBill,
}) => {
  const { name, imgUrl, balance, id } = friend;
  const isSelected = selectedFriendId === id;
  function getBalanceText(balance) {
    if (balance < 0) {
      return (
        <p className="red">
          you own to {name} {Math.abs(balance)} $
        </p>
      );
    } else if (balance > 0) {
      return (
        <p className="green">
          {name} owns you {balance} $
        </p>
      );
    } else {
      return <p>you and {name} are even</p>;
    }
  }

  function handleSelect() {
    onSelectFriend(() => (isSelected ? null : id));
    onshowAddFriend(false);
    onResetBill();
  }

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={imgUrl} alt={name} />
      <h3>{name} </h3>
      {getBalanceText(balance)}
      <Button onClick={handleSelect}> {isSelected ? "close" : "select"}</Button>
    </li>
  );
};

export default FriendCard;
