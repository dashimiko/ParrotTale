/* eslint-disable no-nested-ternary */
import './TagsList.scss';

function TagsList({ tags, tagColors }) {
  return (
    <ul className="taglist">
      {tags.map((tag) => (
        <li
          className={`tag taglist__tag taglist__tag_${tagColors[tag]}`}
          key={tag}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagsList;
