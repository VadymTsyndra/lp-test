
import deleteButton from '../icons/delete.png';
import toggleOn from '../icons/toggleOn.png';
import toggleOff from '../icons/toggeOff.png';
import kyivstar from '../icons/bodyIcon.png';
// import lifecell from '../icons/lifecell.png';

export const TableBody = ({
  rows,
  handleToggle,
  changeIdValue,
  changeNameValue,
  deleteRow,
}) => {
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
            <img src={kyivstar} className="menu-body__icon" alt="Company icon" />
            <input
              type="text"
              className="menu-body__name"
              value={row.name}
              onChange={(e) => changeNameValue(e, row.key)}

            />

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
