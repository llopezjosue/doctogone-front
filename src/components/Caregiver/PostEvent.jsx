import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";

class PostEvent extends React.Component {
  constructor(props, useStyles) {
    super(props);
    this.state = {
      title: "",
      description: "",
      hour: "",
      category: "",
    };
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
      <div className="complete-form" style={{ padding: "30px" }}>
        <form noValidate autoComplete="off">
          <Grid container>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Title"
                value={this.state.title}
                onChange={this.handleChangeTitle}
                fullWidth
                style={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="standard-basic"
                label="Description"
                value={this.state.description}
                onChange={this.handleChangeDescription}
                fullWidth
                style={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="time"
                label="Hour"
                type="time"
                defaultValue="07:30"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                value={this.state.hour}
                onChange={this.handleChangeHour}
                style={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                native
                value={this.state.category}
                onChange={this.handleChangeCategory}
                inputProps={{
                  name: "age",
                  id: "age-native-simple",
                }}
                fullWidth
                style={{ marginBottom: "25px" }}
              >
                <option value="" selected disabled hidden>
                  Choose a category
                </option>
                <option value="medic">medic</option>
                <option value="meal">meal</option>
                <option value="sleep">sleep</option>
                <option value="social">social</option>
              </Select>
            </Grid>
          </Grid>
        </form>
        <Button
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          disableElevation
        >
          Send
        </Button>
      </div>
    );
  }
}

export default PostEvent;
