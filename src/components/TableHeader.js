import arrowDown from '../icons/arrow down.png';
import addStrings from '../icons/addStrings.png';
import deleteStrings from '../icons/deleteStrings.png';


export const TableHeader = ({ addRow }) => {
  return (
    <thead>
      <tr className="menu-header">
        <th className="menu-header__item">
          <div className="menu-header__name">Статус</div>
          <img className="menu-header__img" src={arrowDown} alt="arrow down" />
          <div className="menu-header__line"></div>
        </th>

        <th className="menu-header__item">
          <div className="menu-header__name">Товар</div>
          <img className="menu-header__img" src={arrowDown} alt="arrow down" />
          <div className="menu-header__line"></div>
        </th>

        <th className="menu-header__item">
          <div className="menu-header__name">ID</div>
          <img className="menu-header__img" src={arrowDown} alt="arrow down" />
          <div className="menu-header__line"></div>
        </th>

        <th className="menu-header__item">
          <div className="menu-header__name">Название</div>
          <img className="menu-header__img" src={arrowDown} alt="arrow down" />
          <div className="menu-header__line"></div>
        </th>

        <th className="menu-header__item">
          <div className="menu-header__buttons">
            <button type="button" className="menu-header__button menu-header__button--add-strings" onClick={addRow}>
              <img src={addStrings} alt="Add items button" />
            </button>
            <button type="button" className="menu-header__button menu-header__button--delete-strings">
              <img src={deleteStrings} alt="Delete items button" />
            </button>
          </div>
        </th>
      </tr>
    </thead>
  )
}
