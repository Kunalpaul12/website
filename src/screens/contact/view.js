import React from "react";
import style from "./style";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";
import emailjs from "emailjs-com";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  send = () => {
    let { name, email, message } = this.state;
    let v = this.validator();
    if (!v.success) {
      alert(v.data);
      return;
    }
    emailjs
      .send(
        "gmail",
        "template_N6yLgIN9",
        { name, email, message },
        "user_dRtPKL0SFSbH2PR2yswJT"
      )
      .then(
        (response) => {
          alert("SUCCESS!", response.status, response.text);
        },
        (err) => {
          alert("FAILED...", err);
        }
      );
  };
  validator = () => {
    let { name, email, message } = this.state;
    if (name === "") {
      return {
        success: 0,
        data: "Please provied name",
      };
    }
    if (email === "") {
      return {
        success: 0,
        data: "Please provied email",
      };
    }
    let emailValidate = this.validateEmail(email);
    if (!emailValidate) {
      return {
        success: 0,
        data: "Please provied valid email",
      };
    }
    if (message === "") {
      return {
        success: 0,
        data: "Please provied message",
      };
    }
    return {
      success: 1,
    };
  };
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  render() {
    let { name, email, message } = this.state;
    return (
      <div style={style.container}>
        <p style={style.title_text}>Contact Me</p>
        <p style={style.des_text}>
          If you’d like to chat about a project please fill in the form below
          <br />
          and I’ll get back within 1-2 days.
        </p>
        <div style={style.name_email_view}>
          <Form.Group as={Col} md="6" controlId="formGroupName">
            <Form.Label style={{ color: "white" }}>Name</Form.Label>
            <Form.Control
              type="text"
              onChange={(v) => {
                name = v.target.value;
                this.setState({ name });
              }}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="formGroupEmail">
            <Form.Label style={{ color: "white" }}>Email</Form.Label>
            <Form.Control
              type="email"
              onChange={(v) => {
                email = v.target.value;
                this.setState({ email });
              }}
            />
          </Form.Group>
        </div>
        <div style={style.name_email_view}>
          <Form.Group as={Col} md="12" controlId="exampleForm.ControlTextarea1">
            <Form.Label style={{ color: "white" }}>How can i Help?</Form.Label>
            <Form.Control
              as="textarea"
              size="lg"
              rows="4"
              onChange={(v) => {
                message = v.target.value;
                this.setState({ message });
              }}
            />
          </Form.Group>
        </div>
        <div style={style.name_email_view}>
          <Button
            style={style.button}
            onClick={() => {
              this.send();
            }}
          >
            Send Message
          </Button>
        </div>
      </div>
    );
  }
}

export default Contact;
