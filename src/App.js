import { useState } from 'react';
import './App.scss';
import { v4 as uuid } from "uuid";

import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';

function App() {
  const [isToggled, setToggled] = useState(false);
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [rows, setRows] = useState([]);

  const handleToggle = (key) => {
    setToggled((prevToggled) => !prevToggled);
  
    setRows((prevState) =>
      prevState.map((row) => (row.key === key ? { ...row, toggle: !row.toggle } : row))
    );
  };

  const changeIdValue = (e, key) => {
    if (!isToggled) {
      return;
    }

    const regex = /[а-яА-Яa-zA-Z]/;
    const value = e.target.value;
  
    if (value.length > 3 || regex.test(value)) {
      return;
    }
  
    setRows(prevState =>
      prevState.map(row => (row.key === key ? { ...row, id: value } : row))
    );
  };
  
  const changeNameValue = (e, key) => {
    if (!isToggled) {
      return;
    }

    const value = e.target.value;
    setRows(prevState =>
      prevState.map(row => (row.key === key ? { ...row, name: value } : row))
    );
  };

  const addRow = () => {
    const uniqueKey = uuid();

    const newRow = {
      toggle: isToggled,
      product: 'XXXX-',
      id: idValue,
      name: nameValue,
      key: uniqueKey,
    }

    setRows(prevState => [...prevState, newRow]);
    setIdValue('');
    setNameValue('');
  }

  const deleteRow = (key) => {
    console.log('Deleting row with key:', key);
    const filteredRows = rows.filter(row => row.key !== key);
    setRows(filteredRows);
  }


  return (
    <div className="App">
      <table className="menu">
        <TableHeader addRow={addRow} />

        <TableBody
          rows={rows}
          handleToggle={handleToggle}
          changeIdValue={changeIdValue}
          deleteRow={deleteRow}
          changeNameValue={changeNameValue}
        />
      </table>
    </div>
  );
}

export default App;
