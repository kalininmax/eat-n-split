/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from './Button';

const DEFAULT_IMAGE_URL = 'https://i.pravatar.cc/48';

const FormAddFriend = ({ showAddFriend, onAddFriend }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(DEFAULT_IMAGE_URL);

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (!name || !image) {
      return;
    }

    const id = crypto.randomUUID();

    onAddFriend({
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    });

    setName('');
    setImage(DEFAULT_IMAGE_URL);
  };

  return (
    <form className="form-add-friend" onSubmit={onFormSubmit}>
      <label>
        🧑‍🤝‍👩 Friend name
        <input
          type="text"
          value={name}
          onChange={(evt) => setName(evt.target.value)}
          autoFocus={showAddFriend}
        />
      </label>

      <label>
        🖼️ Image URL
        <input
          type="text"
          value={image}
          onChange={(evt) => setImage(evt.target.value)}
        />
      </label>

      <Button type="submit">Add</Button>
    </form>
  );
};

export default FormAddFriend;
