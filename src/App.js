import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [ob1, setob1] = useState({ name: '', email: '', gender: '' });
  const [ob2, setob2] = useState({ id: '', name: '', email: '', gender: '' });
  const handleChange1 = (e) => {
    console.log('ob1', e.target.placeholder, e.target.value);
  };
  const handleChange2 = (e) => {
    console.log('ob2', e.target.placeholder, e.target.value);
  };
  const _insert = () => {
    const url = `https://example1-g-crud-default-rtdb.firebaseio.com/users/{-N7TT_k_BbSLdhfwszx6 ?},json`;
  };

  const _update = () => {
    const url =
      'https://example1-g-crud-default-rtdb.firebaseio.com/users.json';
  };
  return (
    <div>
      <div>
        <h3> insert form</h3>
        <input
          placeholder="name"
          value={(ob1, name)}
          onChange={handleChange1}
        />
        <input
          placeholder="email"
          value={(ob1, email)}
          onChange={handleChange1}
        />
        <input
          placeholder="gender"
          value={(ob1, gender)}
          onChange={handleChange1}
        />
        <button onClick={_insert}>insert</button>
      </div>
      <div>
        update form
        <input
          placeholder="name"
          value={(ob2, name)}
          onChange={handleChange2}
        />
        <input
          placeholder="email"
          value={(ob2, email)}
          onChange={handleChange2}
        />
        <input
          placeholder="gender"
          value={(ob2, gender)}
          onChange={handleChange2}
        />
        <button onClick={_update}>update</button>
      </div>
      <h3>all users</h3>
      table
    </div>
  );
}
