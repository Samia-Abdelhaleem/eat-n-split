import React, { useState } from "react";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
const FriendForm = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !imgUrl) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      imgUrl: `${imgUrl}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫Friend Name </label>
      <input
        type="text"
        name=""
        id=""
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> 🌄 image URL </label>
      <input
        type="text"
        name=""
        id=""
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
};

export default FriendForm;
