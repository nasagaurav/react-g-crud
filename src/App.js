import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [ob1, setob1] = useState({ name: '', email: '', gender: '' });
  const handleChange1 = (e) => {
    console.log(e.target.placeholder, e.target.value);
  };
  const _insert = () => {
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
      <div>update form</div>
      all data table
    </div>
  );
}
