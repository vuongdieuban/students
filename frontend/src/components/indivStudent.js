import React, { Component } from "react";
import DetailExpand from "./detailExpand";

class IndivStudent extends Component {
  state = {
    toggleDetail: false
  };

  toggleDetail = () => {
    this.setState({ toggleDetail: !this.state.toggleDetail });
  };

  getIconClass = () => {
    return this.state.toggleDetail
      ? "fa fa-minus customFa"
      : "fa fa-plus customFa";
  };

  getListItemClassName = index => {
    // special case for the first list group item, get rid of its top border
    return `list-group-item d-flex justify-content-between align-items-center row ${
      index === 0 ? "no-bt" : ""
    }`;
  };

  studentAverages = grades => {
    const sum = grades
      .map(grade => parseInt(grade))
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    const ave = sum / grades.length;
    return ave;
  };

  render() {
    const { student, index, onNewTagSubmit } = this.props;

    return (
      <div key={student.id} className={this.getListItemClassName(index)}>
        <div className="col">
          <div className="row">
            <div className="col-md-2">
              <img
                className="rounded-circle mx-auto d-block"
                src={student.pic}
                alt={student.id}
                style={{
                  border: "1px solid #ddd",
                  width: "7rem"
                }}
              />
            </div>
            <div className="col-md-8">
              <h2 className="studentName">
                {`${student.firstName} ${student.lastName}`.toLocaleUpperCase()}
              </h2>
              <ul>
                <li>Email: {student.email}</li>
                <li>Company: {student.company}</li>
                <li>Skill: {student.skill}</li>
                <li>Averages: {this.studentAverages(student.grades)}%</li>
              </ul>
              <br />
              <ul>
                {this.state.toggleDetail && (
                  <DetailExpand
                    student={student}
                    onNewTagSubmit={onNewTagSubmit}
                  />
                )}
              </ul>
            </div>
            <div className="col justify-content-end d-flex">
              <span>
                <i
                  className={this.getIconClass()}
                  aria-hidden="true"
                  onClick={this.toggleDetail}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndivStudent;
