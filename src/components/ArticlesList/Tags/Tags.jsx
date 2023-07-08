/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Tags.scss';

function Tags({ activeTags, handleTagClick, allTags, tagColors }) {
  return (
    <div className="tag-container">
      <ul className="tag-container__list">
        {allTags.map((tag) => (
          <li
            key={tag}
            className={`tag-container__tag ${
              activeTags.includes(tag)
                ? 'tag-container__tag--active'
                : 'tag-container__tag--inactive'
            } tag-container__tag_${tagColors[tag]}`}
            onClick={() => handleTagClick(tag)}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;
