import "./taglist.css";

function TagList({ selectedTag, tags, onTagSelect }) {
  return (
    <div className="dropdown-wrapper">
      <select
        className="dropdown"
        onChange={(e) => onTagSelect(e.target.value)}
      >
        <option value={selectedTag}>{selectedTag ? selectedTag : "All"}</option>
        {tags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TagList;
