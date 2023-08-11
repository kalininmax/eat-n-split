/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (!bill || !paidByUser) {
      return;
    }

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={onSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>
        💰 Bill value
        <input
          type="number"
          value={bill}
          onChange={(evt) => setBill(+evt.target.value)}
          autoFocus={!!selectedFriend}
        />
      </label>

      <label>
        🧍 Your expense
        <input
          type="number"
          value={paidByUser}
          onChange={(evt) =>
            setPaidByUser(
              +evt.target.value > bill ? paidByUser : +evt.target.value
            )
          }
        />
      </label>

      <label>
        🧑‍🤝‍👩 {selectedFriend.name}&apos;s expense
        <input type="text" value={paidByFriend} disabled />
      </label>
      <label>
        🤑 Who is paying the bill
        <select
          value={whoIsPaying}
          onChange={(evt) => setWhoIsPaying(evt.target.value)}
        >
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>
      </label>

      <Button type="submit">Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
