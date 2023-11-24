import deleteButton from '../icons/delete.png';
import toggleOn from '../icons/toggleOn.png';
import toggleOff from '../icons/toggeOff.png';

import { SelectImages } from './SelectImages';

export const TableBody = ({
  rows,
  handleToggle,
  changeIdValue,
  changeNameValue,
  deleteRow,
  setRows,
  isToggled,
  isOpened,
}) => {

  const openSelect = (key) => {
    if (!isToggled) {
      return;
    }

    setRows(prevState =>
      prevState.map(row => (row.key === key ? { ...row, isOpened: !isOpened } : row))
    );
  }

  const changeImage = (key, img) => {
    setRows(prevState =>
      prevState.map(row => (row.key === key ? { ...row, selectImage: img, isOpened: false } : row))
    );
  }

  return (
    <tbody>
      {rows.map((row) => (
        <tr className="menu-body" key={row.key} >
          <td className="menu-body__item">
            <div className="menu-body__toggle" onClick={() => handleToggle(row.key)}>
              {row.toggle ? (
                <img src={toggleOn} alt="Toggle on" />
              ) : (
                <img src={toggleOff} alt="Toggle off" />
              )}
            </div>
          </td>
          <td className="menu-body__item">
            <div className="menu-body__product">
              {row.product}
            </div>
          </td>
          <td className="menu-body__item">
            <input
              autoFocus
              type="text"
              className="menu-body__id"
              value={row.id}
              onChange={(e) => changeIdValue(e, row.key)}
            />
          </td>

          <td className="menu-body__item menu-body__item--name">
            <img
              src={row.selectImage}
              className="menu-body__icon"
              alt="Company icon"
              onClick={() => openSelect(row.key)}
            />
            <input
              type="text"
              className="menu-body__name"
              value={row.name}
              onChange={(e) => changeNameValue(e, row.key)}

            />

            {
              row.isOpened && (
                <div className="menu-body__select">
                  <SelectImages changeImage={changeImage} row={row} />
                </div>
              )
            }

            <button type="button" className="menu-body__button" onClick={() => deleteRow(row.key)}>
              <img className="menu-body__button-image" src={deleteButton} alt="Delete button" />
            </button>
          </td>

          <td className="menu-body__item">
          </td>
      </tr>
      ))}
    </tbody>
  )
}
