import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class PostEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", description: "", hour: "", category: "" };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeHour = this.handleChangeHour.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription(event) {
    this.setState({ description: event.target.value });
  }

  handleChangeHour(event) {
    this.setState({ hour: event.target.value });
  }

  handleChangeCategory(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit() {
    let previous = JSON.parse(window.localStorage.getItem("event")) || [];
    let newList = this.state;
    previous.push(newList);
    window.localStorage.setItem("event", JSON.stringify(previous));
    this.props.useWhenClicking(!this.props.whenClicking);
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter your text"
            value={this.state.title}
            onChange={this.handleChangeTitle}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="Enter your text"
            value={this.state.description}
            onChange={this.handleChangeDescription}
          />
        </FormGroup>
        <FormGroup>
          <Label for="time">Time</Label>
          <Input
            type="time"
            name="time"
            id="time"
            placeholder="Enter the hour"
            value={this.state.hour}
            onChange={this.handleChangeHour}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input
            type="select"
            name="category"
            id="category"
            onChange={this.handleChangeCategory}
          >
            <option value="" selected disabled hidden>
              Choose a category
            </option>
            <option value="medic">medic</option>
            <option value="meal">meal</option>
            <option value="sleep">sleep</option>
            <option value="social">social</option>
          </Input>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}

export default PostEvent;
