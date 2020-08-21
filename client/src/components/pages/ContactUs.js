import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mknqabjo"
        method="POST"
        className="card bg-dark"
      >
        <h2>Contact Us</h2>
        <h6>
          <b>Name:</b>
        </h6>
        <br />
        <input type="text" name="name" required />
        <br />
        <h6>
          <b>Email:</b>
        </h6>
        <br />
        <input type="text" name="mail" required />
        <br />
        <h6>
          <b>Comment:</b>
        </h6>
        <br />
        <input type="text" name="comment" size="50" required />
        <br />
        <br />
        {status === "SUCCESS" ? (
          <h2>Thanks, have a good day further!</h2>
        ) : (
          <button className="btn btn-danger">Submit</button>
        )}
        {status === "ERROR" && <h2>Ooops! There was an error.</h2>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
