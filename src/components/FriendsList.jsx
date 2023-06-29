import React from "react";
import FriendCard from "./FriendCard";

const FriendsList = ({
  friends,
  selectedFriendId,
  onSelectFriend,
  onshowAddFriend,
  onResetBill,
}) => {
  return (
    <ul>
      {friends.map((friend) => (
        <FriendCard
          key={friend.id}
          friend={friend}
          selectedFriendId={selectedFriendId}
          onSelectFriend={onSelectFriend}
          onshowAddFriend={onshowAddFriend}
          onResetBill={onResetBill}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
