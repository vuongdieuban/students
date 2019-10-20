import React, { Component } from "react";
import IndivStudent from "./indivStudent";

class ListStudents extends Component {
  state = {};

  render() {
    let { students, studentsCount, onNewTagSubmit } = this.props;

    return (
      <React.Fragment>
        {studentsCount !== 0 ? (
          students.map((student, index) => (
            <IndivStudent
              key={student.id}
              student={student}
              index={index}
              onNewTagSubmit={onNewTagSubmit}
            />
          ))
        ) : (
          <p>There are no results</p>
        )}
      </React.Fragment>
    );
  }
}

export default ListStudents;
