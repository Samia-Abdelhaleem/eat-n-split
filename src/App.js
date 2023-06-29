import { useState } from "react";
import "./App.css";
import BillForm from "./components/BillForm";
import Button from "./components/Button";
import FriendForm from "./components/FriendForm";
import FriendsList from "./components/FriendsList";
import initialFriends from "./data";

function App() {
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [selectedFriendId, setSelectedFriendId] = useState(null);
  const [resetBill, setResetBill] = useState({});
  const selectedFriend = selectedFriendId
    ? friendsList.find((friend) => friend.id === selectedFriendId)
    : {};
  function handleShowFriend() {
    setShowAddFriendForm((isShow) => !isShow);
  }

  function handleAddFriend(newFriend) {
    const newFriendsList = [...friendsList, newFriend];
    setFriendsList(newFriendsList);
    setShowAddFriendForm(false);
  }
  function handleUpdateFriends(updatedFriend) {
    const newFriends = friendsList
      .slice()
      .map((friend) =>
        friend.id === selectedFriendId ? updatedFriend : friend
      );

    setFriendsList(newFriends);
  }

  function handleResetBill() {
    setResetBill({ billValue: "", userExpenseValue: "", whoPayValue: "user" });
  }
  return (
    <div className="app">
      {" "}
      <div className="sidebar">
        <FriendsList
          friends={friendsList}
          selectedFriendId={selectedFriendId}
          onSelectFriend={setSelectedFriendId}
          onshowAddFriend={setShowAddFriendForm}
          onResetBill={handleResetBill}
        />
        {showAddFriendForm && <FriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowFriend}>
          {showAddFriendForm ? "Close" : "Add Friend "}
        </Button>
      </div>
      {selectedFriendId && (
        <BillForm
          selectedFriend={selectedFriend}
          onAddBill={handleUpdateFriends}
          resetBill={resetBill}
        />
      )}
    </div>
  );
}

export default App;
