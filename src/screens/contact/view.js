import React from "react";
import style from "./style";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";
import emailjs from "emailjs-com";
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
        <div style={style.formView}>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
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

              <Form.Group as={Col} controlId="formGridPassword">
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
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label style={{ color: "white" }}>
                How can i Help ?
              </Form.Label>
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
            <Form.Group>
              <Col
                sm={{ span: 10, offset: 4 }}
                xs={{ span: 10, offset: 4 }}
                md={{ span: 10, offset: 4 }}
                lg={{ span: 10, offset: 4 }}
              >
                <Button
                  style={style.button}
                  onClick={() => {
                    this.send();
                  }}
                >
                  {spinner ? "Sending ..." : "Submit"}
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default Contact;
