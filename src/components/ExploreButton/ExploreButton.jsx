import { NavLink } from 'react-router-dom';
import './ExploreButton.scss';

function ExploreButton({ link, localStyleName }) {
  return (
    <NavLink
      // target="_blank"
      // rel="noreferrer"
      to={link}
      className={`${localStyleName} pictureBox__button explore-button link`}
    >
      <span>Learn more</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </NavLink>
  );
}

export default ExploreButton;
