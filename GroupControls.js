import React from 'react';

const GroupControls = ({ setGroupBy, setSortBy }) => {
  return (
    <div className="controls">
      <label>
        Group by:
        <select onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </label>
      <label>
        Sort by:
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </label>
    </div>
  );
};

export default GroupControls;
