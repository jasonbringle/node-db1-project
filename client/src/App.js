import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
const [ accounts, setAccounts] = useState()
console.log(accounts)

  useEffect(()=>{
    axios
    .get("http://localhost:5000/api/accounts")
    .then(accounts =>
      setAccounts(accounts.data))
    .catch(err => err)
  }, [])

  return (
    <div>
      {accounts && accounts.map(account => 
        <div>
          <h1>{account.name}</h1>
          <p>{account.budget}</p>
        </div>)
      }  
    </div>
  );
}

export default App;
