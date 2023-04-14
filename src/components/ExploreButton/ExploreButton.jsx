import './ExploreButton.scss';

function ExploreButton({ link, localStyleName }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={link}
      className={`${localStyleName} pictureBox__button explore-button link`}
    >
      <span>Learn more</span>
      <svg width="13px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </a>
  );
}

export default ExploreButton;
