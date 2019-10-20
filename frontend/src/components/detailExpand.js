import React from "react";
import TagInput from "./tagInput";

const DetailExpand = props => {
  const { student, onNewTagSubmit } = props;
  return (
    <React.Fragment>
      {student.grades.map((grade, index) => (
        <li key={index}>
          Test {index + 1}: <span className="tab" /> {grade}%
        </li>
      ))}
      {student.tags.map((tag, index) => (
        <button
          type="button"
          className="btn btn-secondary btn-md"
          disabled
          key={index}
          style={{ margin: "0.5em" }}
        >
          {tag}
        </button>
      ))}
      <TagInput onNewTagSubmit={onNewTagSubmit} student={student} />
    </React.Fragment>
  );
};

export default DetailExpand;
