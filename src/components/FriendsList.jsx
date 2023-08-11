/* eslint-disable react/prop-types */
import Friend from './Friend';

const FriendsList = ({ friends, selectedFriend, onSelect }) => {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          selectedFriend={selectedFriend}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
