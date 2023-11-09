import { NavLink } from 'react-router-dom';
import './ReturnButton.scss';

function ReturnButton({ link }) {
  return (
    <NavLink to={link} className="return-button">
      <div className="return-button__arrow" />
      <p className="return-button__text">Back to the List</p>
    </NavLink>
  );
}

export default ReturnButton;
