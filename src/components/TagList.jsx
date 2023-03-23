import React from "react";

function TagList({ tags, onTagSelect }) {
  return (
    <select onChange={(e) => onTagSelect(e.target.value)}>
      <option value="">All</option>
      {tags.map((tag,index) => (
        <option key={index} value={tag}>
          {tag}
        </option>
      ))}
    </select>
  );
}

export default TagList;
