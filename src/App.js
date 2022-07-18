import React, { useState, useEffect} from 'react';
import axios from 'axios';

export default function App() {
  const _nasa=ob=>{
    let keys=object.keys(ob)
    let values= object.value(ob)
    let Temp=[]
    for(let index in keys)
    {
      Temp.push({
        id:keys[index],
        ...values,[index],

      });

    }
    return temp;
  }  
  const [a,seta] = [( )];
  const [ob1, setob1] = useState({ name: '', email: '', gender: '' });
  const [ob2, setob2] = useState({ id: '', name: '', email: '', gender: '' });
  const handleChange1 = (e) => {
    console.log('ob1', e.target.placeholder, e.target.value);
  };
  const handleChange2 = (e) => {
    console.log('ob2', e.target.placeholder, e.target.value);
  };
  const _insert = () => {
    const url =
      'https://example1-g-crud-default-rtdb.firebaseio.com/users.json';
  };

  const _update = () => {
    const url = `https://example1-g-crud-default-rtdb.firebaseio.com/users/{-N7TT_k_BbSLdhfwszx6 ?},json`;
  }; 
  const _edit = ()=>{  }
  const _delete = ()=>{

  }
     const loadUsers = ()=>{
      const url =
      'https://example1-g-crud-default-rtdb.firebaseio.com/users.json';

      axios.get(url)
      .then(res=>res.data)
      .then(d=>_nasa( d))
      .then(d=>console.log( d))
      .catch(e=>console.log('err',e))
      .finally(()=>console.log('process completed: completed'))



     }
    useEffect(loadUsers,[])
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
        
      <h3>all users</h3>
      </div>
      <h1>all users {a.length}</h1> 
         <table>
           <thead>
             <tr>
               <th>id</th>
               <th>name</th>
               <th>email</th>
               <th>gender</th>
               <th>actions</th>
             </tr>
           </thead>

           <tbody>
             <tr>
               <td>item.id</td>
               <td>item.name</td>
               <td>item.email</td>
               <td>item.gender</td>
               <td>
                 <button onClick={_edit}>edit</button>
                 <button onClick={_delete}>delete</button>
               </td>
           </tbody>
         </table>
    </div>
  );
}
