import React, { Component } from "react";

class TagInput extends Component {
  state = {};
  handleSubmit = event => {
    const { student, onNewTagSubmit } = this.props;
    const tag = this.refs.input.value;
    onNewTagSubmit(event, student, tag);
  };
  render() {
    return (
      <div className="inputBarContainer">
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            className="customTagInputBar"
            type="text"
            placeholder="Add a tag"
            aria-label="Search"
            ref="input"
          />
        </form>
      </div>
    );
  }
}

export default TagInput;
