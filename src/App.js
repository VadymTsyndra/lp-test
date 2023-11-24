import { useState, useRef } from 'react';
import './App.scss';
import { v4 as uuid } from "uuid";

import kyivstar from './icons/bodyIcon.png';
import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';

function App() {
  const [idValue, setIdValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [rows, setRows] = useState([]);
  const [isToggled, setToggled] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

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
      toggle: false,
      product: 'XXXX-',
      id: idValue,
      name: nameValue,
      key: uniqueKey,
      isOpened: false,
      selectImage: kyivstar,
    }

    setRows(prevState => {
      const newRows = [...prevState];
      newRows.unshift(newRow);
      return newRows;
    });

    setIdValue('');
    setNameValue('');
    setToggled(false);
    setIsOpened(false);
  }

  const deleteRow = (key) => {
    const filteredRows = rows.filter(row => row.key !== key);
    setRows(filteredRows);
  }

  return (
    <div className="App">
      <table className="menu" >
        <TableHeader addRow={addRow} />

        <TableBody
          rows={rows}
          setRows={setRows}
          handleToggle={handleToggle}
          changeIdValue={changeIdValue}
          deleteRow={deleteRow}
          changeNameValue={changeNameValue}
          isToggled={isToggled}
          isOpened={isOpened}
          setIsOpened={setIsOpened}
        />
      </table>
    </div>
  );
}

export default App;
