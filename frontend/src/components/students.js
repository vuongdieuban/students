import React, { Component } from "react";
import SearchBar from "./searchBar";
import ListStudents from "./listStudents";
import { getStudents } from "../services/studentsService";

class Students extends Component {
  state = {
    students: [],
    searchName: "",
    searchTag: ""
  };

  async componentDidMount() {
    let students = await getStudents();
    students = this.mapToViewModel(students);
    this.setState({ students });
  }

  mapToViewModel = students => {
    return students.map(student => {
      let newStudentModel = { ...student };
      newStudentModel.tags = [];
      return newStudentModel;
    });
  };

  handleNameSearch = searchName => {
    this.setState({ searchName });
  };

  handleTagsSearch = searchTag => {
    this.setState({ searchTag });
  };

  handleNewTagSubmit = (e, student, newTag) => {
    e.preventDefault();
    let students = [...this.state.students];
    const index = students.indexOf(student);
    let newStudentData = { ...student };
    let newStudentTags = [...newStudentData.tags];
    newStudentTags.push(newTag);
    newStudentData.tags = newStudentTags;
    students[index] = newStudentData;
    this.setState({ students });
  };

  matchStudentTags = (student, searchTag) => {
    let match = false;

    for (const tag of student.tags) {
      if (tag.includes(searchTag)) {
        match = true;
        break;
      }
    }

    return match;
  };

  getStudents = () => {
    const { searchName, searchTag, students: allStudents } = this.state;
    let filteredStudents = allStudents;

    if (searchName) {
      filteredStudents = filteredStudents.filter(student =>
        `${student.firstName} ${student.lastName}`
          .toLocaleLowerCase()
          .includes(searchName.toLowerCase())
      );
    }
    if (searchTag) {
      filteredStudents = filteredStudents.filter(student =>
        this.matchStudentTags(student, searchTag)
      );
    }
    return {
      students: filteredStudents,
      studentsCount: filteredStudents.length
    };
  };

  render() {
    const { students, studentsCount } = this.getStudents();

    return (
      <div className="container box ">
        <div className="box-content customScrollbar">
          <ul className="list-group">
            <SearchBar
              onChange={this.handleNameSearch}
              placeholder="Search by name"
            />
            <SearchBar
              onChange={this.handleTagsSearch}
              placeholder="Search by tags"
            />
            <ListStudents
              students={students}
              studentsCount={studentsCount}
              onNewTagSubmit={this.handleNewTagSubmit}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Students;
