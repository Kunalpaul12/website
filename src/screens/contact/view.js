import React from "react";
import style from "./style";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";
import emailjs from "emailjs-com";
import Spinner from "react-bootstrap/Spinner";
import config from "../../config/email";
import { validator } from "./validator";
import contact from "../../config/contact";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      spinner: false,
    };
  }
  send = async () => {
    let { name, email, message } = this.state;
    let v = validator(this.state);
    if (!v.success) {
      alert(v.data);
      return;
    }
    this.setState({ spinner: true });
    try {
      await emailjs.send(
        config.service,
        config.templeteID,
        { name, email, message },
        config.userID
      );
      alert("SUCCESS!");
    } catch (data) {
      alert("FAILED...");
    }
    this.setState({ spinner: false });
  };

  render() {
    let { name, email, message, spinner } = this.state;
    return (
      <div style={style.container}>
        <p style={style.title_text}>Contact Me</p>
        <p style={style.des_text}>
          If you’d like to chat about a project please fill in the form below
          <br />
          and I’ll get back or {contact.phone}.
        </p>
        <div style={style.name_email_view}>
          <Form.Group as={Col} md="6" controlId="formGroupName">
            <Form.Label style={{ color: "white" }}>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
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
              value={email}
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
              value={message}
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
            {spinner && (
              <Spinner
                variant="light"
                animation="border"
                size="sm"
                style={style.spinner}
              />
            )}
          </Button>
        </div>
      </div>
    );
  }
}

export default Contact;
